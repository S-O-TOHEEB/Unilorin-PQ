(function(){
"use strict";
var DATA = QUIZ_DATA; // provided by js/data.js, loaded before this file

// ---------- flatten helpers ----------
var allQuestions = []; // {uid, subjectId, subjectName, topicId, topicName, q,o,a,concept,method}
DATA.subjects.forEach(function(s){
  s.topics.forEach(function(t){
    t.questions.forEach(function(qq, i){
      allQuestions.push({
        uid: s.id+'::'+t.id+'::'+i,
        subjectId: s.id, subjectName: s.name,
        topicId: t.id, topicName: t.name,
        q: qq.q, o: qq.o, a: qq.a, concept: qq.concept, method: qq.method
      });
    });
  });
});
var totalQCount = allQuestions.length;

function byId(id){ return document.getElementById(id); }
function subjectById(id){ return DATA.subjects.filter(function(s){return s.id===id;})[0]; }
function topicById(sid,tid){ var s=subjectById(sid); return s.topics.filter(function(t){return t.id===tid;})[0]; }
function qsFor(sid,tid){ return allQuestions.filter(function(x){return x.subjectId===sid && (!tid || x.topicId===tid);}); }
function shuffle(arr){
  var a = arr.slice();
  for (var i=a.length-1;i>0;i--){ var j=Math.floor(Math.random()*(i+1)); var tmp=a[i]; a[i]=a[j]; a[j]=tmp; }
  return a;
}
// Pick `count` questions from subject `s`, drawn proportionally to each topic's
// real-world reoccurrence (t.freq) rather than uniformly across the subject's question pool.
// This means a topic that shows up twice as often in the past-paper archive is roughly
// twice as likely to appear in a simulated CBT run — mirroring actual exam patterns.
function weightedTopicPick(s, count){
  var topics = s.topics.filter(function(t){ return t.questions.length > 0; });
  var totalFreq = topics.reduce(function(sum,t){ return sum + (t.freq||1); }, 0);
  var picks = [];
  var remaining = count;
  topics.forEach(function(t, idx){
    var share = (idx === topics.length-1) ? remaining : Math.round(count * (t.freq||1) / totalFreq);
    share = Math.max(0, Math.min(share, t.questions.length, remaining));
    remaining -= share;
    var pool = qsFor(s.id, t.id);
    picks = picks.concat(shuffle(pool).slice(0, share));
  });
  // if rounding left questions unassigned (or a topic ran out), top up from the whole subject
  if(remaining > 0){
    var used = {}; picks.forEach(function(p){ used[p.uid]=true; });
    var leftovers = shuffle(qsFor(s.id).filter(function(x){ return !used[x.uid]; }));
    picks = picks.concat(leftovers.slice(0, remaining));
  }
  return picks;
}

function weightedPick(n){
  // Step 1: split n across subjects by the official exam weight (English 80% / Math 10% / GK 10%).
  // Step 2: within each subject, split that subject's share across topics by past-paper
  // reoccurrence frequency, so higher-frequency topics (e.g. Concord, Vocabulary-in-Context)
  // show up more often in the simulation — the same skew a real Post-UTME paper has.
  var totalWeight = DATA.subjects.reduce(function(sum,s){return sum+s.weight;},0);
  var picks = [];
  var remaining = n;
  DATA.subjects.forEach(function(s, idx){
    var count = (idx === DATA.subjects.length-1) ? remaining : Math.round(n * s.weight / totalWeight);
    count = Math.min(count, qsFor(s.id).length);
    remaining -= count;
    picks = picks.concat(weightedTopicPick(s, count));
  });
  return shuffle(picks);
}

// ---------- state ----------
var state = {
  view: 'dashboard',
  quizQueue: [],
  quizIndex: 0,
  quizAnswers: [], // {uid, selected, correct}
  quizMode: 'topic', // 'topic' | 'simulate' | 'retry'
  quizLabel: '',
  timerRemaining: 0,
  timerHandle: null,
  locked: false,
  currentSubjectId: null
};

function setView(v, opts){
  opts = opts || {};
  ['dashboard','subject','quiz','summary'].forEach(function(name){
    byId('view-'+name).classList.toggle('hide', name!==v);
  });
  state.view = v;
  if(!opts.keepScroll){
    var mainEl = document.querySelector('main');
    if(mainEl && typeof mainEl.scrollIntoView === 'function'){
      mainEl.scrollIntoView({behavior:'smooth', block:'start'});
    }
  }
}

// ---------- topbar / footer ----------
function renderChrome(){
  byId('topbarStats').innerHTML =
    '<span><span class="stat-lbl">Bank</span><br><b>'+totalQCount+'</b> questions</span>' +
    '<span><span class="stat-lbl">Format</span><br><b>CBT</b> style</span>';
  byId('heroBankCount').textContent = totalQCount + ' QUESTIONS IN BANK';
  byId('footerCount').textContent = totalQCount + ' curated questions across ' +
    DATA.subjects.reduce(function(n,s){return n+s.topics.length;},0) + ' topics';
}

// ---------- dashboard ----------
function renderDashboard(){
  var sorted = DATA.subjects.slice().sort(function(a,b){return b.weight-a.weight;});
  var html = sorted.map(function(s, idx){
    var qcount = qsFor(s.id).length;
    return '' +
    '<div class="rank-card" data-subject="'+s.id+'">' +
      '<div class="rank-num"><span class="n">'+(idx+1)+'</span><span class="lbl">rank</span></div>' +
      '<div class="rank-main">' +
        '<h3>'+s.name+'</h3>' +
        '<p>'+s.intro+'</p>' +
        '<div class="meter"><i style="width:'+s.weight+'%"></i></div>' +
        '<div class="rank-meta"><span>'+s.topics.length+' topics</span><span>&middot;</span><span>'+qcount+' practice questions</span></div>' +
      '</div>' +
      '<div class="rank-side">' +
        '<div class="weight-badge">'+s.weight+'<span>%</span></div>' +
        '<button class="btn btn-outline btn-sm" data-open="'+s.id+'">Open topics &rarr;</button>' +
      '</div>' +
    '</div>';
  }).join('');
  byId('rankList').innerHTML = html;
  Array.prototype.forEach.call(document.querySelectorAll('#rankList [data-open], #rankList .rank-card'), function(el){
    el.addEventListener('click', function(e){
      var sid = el.getAttribute('data-open') || el.getAttribute('data-subject');
      if(sid) openSubject(sid);
    });
  });
}

function openSubject(sid){
  state.currentSubjectId = sid;
  var s = subjectById(sid);
  byId('crumbSubject').textContent = s.name;
  byId('subjectEyebrow').textContent = s.weight+'% of the real exam';
  byId('subjectTitle').textContent = s.name;
  byId('subjectIntro').textContent = s.intro;

  // Rank topics by how often they actually recur in the past-paper archive (t.freq),
  // not by insertion order — the topic most likely to show up on the real exam sits first.
  var rankedTopics = s.topics.slice().sort(function(a,b){ return (b.freq||0)-(a.freq||0); });
  var maxFreq = rankedTopics.length ? (rankedTopics[0].freq||1) : 1;
  var html = rankedTopics.map(function(t, idx){
    var notes = t.concept_notes.map(function(n){return '<li>'+n+'</li>';}).join('');
    var freqPct = Math.max(6, Math.round(100 * (t.freq||0) / maxFreq));
    var rankBadge = idx < 3 ? '<span class="freq-badge freq-top">#'+(idx+1)+' most-tested</span>' : '<span class="freq-badge">#'+(idx+1)+' by reoccurrence</span>';
    return '' +
    '<div class="topic-card" data-topic="'+t.id+'">' +
      '<div class="topic-head" data-toggle="'+t.id+'">' +
        '<div class="topic-head-left">' +
          '<div class="topic-idx">'+(idx+1)+'</div>' +
          '<div><h4>'+t.name+'</h4><p>'+t.blurb+'</p>' +
            '<div class="freq-row"><div class="freq-meter"><i style="width:'+freqPct+'%"></i></div>'+rankBadge+'</div>' +
          '</div>' +
        '</div>' +
        '<div style="display:flex;align-items:center;gap:14px;">' +
          '<span class="topic-count">'+t.questions.length+' questions</span>' +
          '<svg class="chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>' +
        '</div>' +
      '</div>' +
      '<div class="topic-body"><div class="topic-body-inner">' +
        '<ul class="concept-notes">'+notes+'</ul>' +
        '<div class="topic-actions">' +
          '<button class="btn btn-primary btn-sm" data-practice="'+t.id+'">Practice this topic (' + t.questions.length + ')</button>' +
        '</div>' +
      '</div></div>' +
    '</div>';
  }).join('');

  var subjectPracticeBtn = '<div style="margin:22px 0 4px;"><button class="btn btn-outline" id="practiceAllSubject">Practice all of ' + s.name + ' (' + qsFor(s.id).length + ' questions) &rarr;</button></div>';

  byId('topicList').innerHTML = html + subjectPracticeBtn;

  Array.prototype.forEach.call(document.querySelectorAll('[data-toggle]'), function(el){
    el.addEventListener('click', function(){
      el.closest('.topic-card').classList.toggle('open');
    });
  });
  Array.prototype.forEach.call(document.querySelectorAll('[data-practice]'), function(el){
    el.addEventListener('click', function(e){
      e.stopPropagation();
      var tid = el.getAttribute('data-practice');
      startQuiz(qsFor(sid, tid), 'topic', s.name + ' \u2014 ' + topicById(sid,tid).name);
    });
  });
  byId('practiceAllSubject').addEventListener('click', function(){
    startQuiz(shuffle(qsFor(sid)), 'topic', s.name + ' \u2014 full subject');
  });

  setView('subject');
}

// ---------- quiz engine ----------
function startQuiz(questions, mode, label, timerSeconds){
  if(!questions.length) return;
  state.quizQueue = questions;
  state.quizIndex = 0;
  state.quizAnswers = [];
  state.quizMode = mode;
  state.quizLabel = label;
  byId('termLabel').textContent = label;
  byId('termTimer').classList.toggle('hide', !timerSeconds);
  if(timerSeconds){
    state.timerRemaining = timerSeconds;
    startTimer();
  } else if(state.timerHandle){
    clearInterval(state.timerHandle); state.timerHandle = null;
  }
  setView('quiz');
  renderQuestion();
}

function startTimer(){
  if(state.timerHandle) clearInterval(state.timerHandle);
  updateTimerDisplay();
  state.timerHandle = setInterval(function(){
    state.timerRemaining--;
    updateTimerDisplay();
    if(state.timerRemaining <= 0){
      clearInterval(state.timerHandle);
      state.timerHandle = null;
      finishQuiz();
    }
  }, 1000);
}
function updateTimerDisplay(){
  var m = Math.floor(state.timerRemaining/60);
  var s = state.timerRemaining%60;
  var el = byId('termTimer');
  el.textContent = '\u23F1 ' + m + ':' + (s<10?'0':'')+s;
  el.classList.toggle('low', state.timerRemaining <= 60);
}

function currentQ(){ return state.quizQueue[state.quizIndex]; }

function renderQuestion(){
  state.locked = false;
  var q = currentQ();
  var letters = Object.keys(q.o);
  byId('termTag').textContent = q.subjectName + ' \u2013 ' + q.topicName;
  byId('termQuestion').textContent = q.q;
  byId('termProgressText').textContent = 'Q'+(state.quizIndex+1)+' / '+state.quizQueue.length;
  byId('termProgressBar').style.width = Math.round(((state.quizIndex)/state.quizQueue.length)*100)+'%';
  var correctSoFar = state.quizAnswers.filter(function(a){return a.correct;}).length;
  byId('termScore').textContent = 'Score '+correctSoFar+' / '+state.quizAnswers.length;

  var optsHtml = letters.map(function(L, i){
    return '<button class="term-opt" data-letter="'+L+'"><span class="letter">'+L+'</span><span class="otext">'+q.o[L]+'</span><kbd>'+(i+1)+'</kbd></button>';
  }).join('');
  byId('termOptions').innerHTML = optsHtml;
  byId('termFeedback').classList.remove('show');
  byId('termNext').disabled = true;
  byId('termNext').textContent = (state.quizIndex === state.quizQueue.length-1) ? 'Finish \u2192' : 'Next \u2192';
  byId('termHint').textContent = 'Press 1\u20134 or click an option';

  Array.prototype.forEach.call(document.querySelectorAll('.term-opt'), function(btn){
    btn.addEventListener('click', function(){ selectAnswer(btn.getAttribute('data-letter')); });
  });
}

function selectAnswer(letter){
  if(state.locked) return;
  state.locked = true;
  var q = currentQ();
  var correct = (letter === q.a);
  state.quizAnswers.push({uid:q.uid, selected:letter, correct:correct});

  Array.prototype.forEach.call(document.querySelectorAll('.term-opt'), function(btn){
    btn.classList.add('locked');
    var L = btn.getAttribute('data-letter');
    if(L === q.a) btn.classList.add('correct');
    if(L === letter && !correct) btn.classList.add('incorrect');
    if(L === letter) btn.classList.add('selected');
  });

  byId('fbVerdict').innerHTML = correct
    ? '\u2713 Correct'
    : '\u2717 Not quite \u2014 correct answer is <b style="color:inherit">'+q.a+'</b>';
  byId('fbVerdict').className = 'feedback-verdict ' + (correct?'right':'wrong');
  byId('fbConcept').textContent = q.concept;
  byId('fbMethod').textContent = q.method;
  byId('termFeedback').classList.add('show');
  byId('termNext').disabled = false;
  byId('termHint').textContent = 'Press Enter or click Next to continue';

  var correctSoFar = state.quizAnswers.filter(function(a){return a.correct;}).length;
  byId('termScore').textContent = 'Score '+correctSoFar+' / '+state.quizAnswers.length;
}

function nextQuestion(){
  if(!state.locked) return; // must answer first
  if(state.quizIndex < state.quizQueue.length-1){
    state.quizIndex++;
    renderQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz(){
  if(state.timerHandle){ clearInterval(state.timerHandle); state.timerHandle = null; }
  var correct = state.quizAnswers.filter(function(a){return a.correct;}).length;
  var total = state.quizQueue.length;
  var answered = state.quizAnswers.length;
  var pct = total ? Math.round((correct/total)*100) : 0;

  byId('scoreRing').style.setProperty('--pct', pct);
  byId('scoreNum').textContent = pct+'%';
  var headline, body;
  if(answered < total){
    headline = 'Time\u2019s up.';
    body = 'You answered '+answered+' of '+total+' questions ('+correct+' correct) before the clock ran out. That pace is exactly what to work on next \u2014 speed comes from recognising patterns, not rushing.';
  } else if(pct >= 80){
    headline = 'Strong session.';
    body = 'You got '+correct+' of '+total+' correct ('+pct+'%). You\u2019re close to exam-ready on this set \u2014 tighten up the ones you missed below.';
  } else if(pct >= 50){
    headline = 'Solid start.';
    body = 'You got '+correct+' of '+total+' correct ('+pct+'%). Review the concepts below, then retry the missed questions until they feel automatic.';
  } else {
    headline = 'Good diagnostic.';
    body = 'You got '+correct+' of '+total+' correct ('+pct+'%). That\u2019s useful information \u2014 you now know exactly which concepts to study before moving on.';
  }
  byId('summaryHeadline').textContent = headline;
  byId('summaryBody').textContent = body;

  var missed = state.quizAnswers.filter(function(a){return !a.correct;});
  var missedQ = missed.map(function(a){
    var q = allQuestions.filter(function(x){return x.uid===a.uid;})[0];
    return {q:q, chosen:a.selected};
  });
  window.__lastMissed = missedQ.map(function(m){return m.q;});
  byId('retryMissed').style.display = missedQ.length ? '' : 'none';

  if(missedQ.length === 0){
    byId('reviewList').innerHTML = '<div class="review-item">Perfect run \u2014 nothing to review. Try a harder mix or a different topic next.</div>';
  } else {
    byId('reviewList').innerHTML = '<h3 style="font-family:var(--serif);font-size:18px;margin:0 0 4px;">Missed questions</h3>' + missedQ.map(function(m){
      return '<div class="review-item">' +
        '<div class="rq">'+m.q.q+'</div>' +
        '<div class="ra">You chose <b>'+m.chosen+'. '+m.q.o[m.chosen]+'</b> &nbsp;&middot;&nbsp; Correct: <span class="ok">'+m.q.a+'. '+m.q.o[m.q.a]+'</span></div>' +
        '<div class="rc">'+m.q.concept+' <br><i>'+m.q.method+'</i></div>' +
      '</div>';
    }).join('');
  }
  setView('summary');
}

// ---------- events ----------
byId('brandBtn').addEventListener('click', function(){ setView('dashboard'); });
byId('crumbBack').addEventListener('click', function(){ setView('dashboard'); });
byId('ctaBrowse').addEventListener('click', function(){
  document.getElementById('view-dashboard').scrollIntoView({behavior:'smooth'});
});
function launchSimulation(){
  var picks = weightedPick(100);
  startQuiz(picks, 'simulate', 'Full CBT Simulation (Extended)', 50*60);
}
byId('ctaSimulate').addEventListener('click', launchSimulation);
byId('ctaSimulate2').addEventListener('click', launchSimulation);
byId('termNext').addEventListener('click', nextQuestion);
byId('termQuit').addEventListener('click', function(){
  if(state.timerHandle){ clearInterval(state.timerHandle); state.timerHandle=null; }
  if(state.quizAnswers.length){ finishQuiz(); } else { setView(state.currentSubjectId ? 'subject' : 'dashboard'); }
});
byId('backToDash').addEventListener('click', function(){ setView('dashboard'); });
byId('retryMissed').addEventListener('click', function(){
  var missed = window.__lastMissed || [];
  if(!missed.length) return;
  startQuiz(shuffle(missed), 'retry', 'Reviewing missed questions');
});

document.addEventListener('keydown', function(e){
  if(state.view !== 'quiz') return;
  var letters = Object.keys(currentQ().o);
  if(!state.locked && /^[1-4]$/.test(e.key)){
    var idx = parseInt(e.key,10)-1;
    if(letters[idx]) selectAnswer(letters[idx]);
  } else if(!state.locked && /^[A-Da-d]$/.test(e.key)){
    var L = e.key.toUpperCase();
    if(letters.indexOf(L)>-1) selectAnswer(L);
  } else if(state.locked && (e.key==='Enter' || e.key===' ')){
    e.preventDefault();
    nextQuestion();
  }
});

// ---------- init ----------
renderChrome();
renderDashboard();
setView('dashboard', {keepScroll:true});

})();

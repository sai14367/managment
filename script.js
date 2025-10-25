/* script.js
   Replica behavior of the provided mock-test site
   Uses embedded QUESTION_BANK (from the uploaded PDF).
*/

/* --------------------
   QUESTION_BANK (weeks 0-12) - parsed from your PDF
   Each week: { week: Number, questions: [ { id, text, options[], answer } ] }
   -------------------- */
const QUESTION_BANK = [
  { week: 0, questions: [
      { id: "0-1", text: "Which one of the following is not a symptom of the present software crisis?", options: ["Software is expensive.","It takes too long to build a software product.","Software is delivered late.","Software products are required to perform very complex tasks."], answer: "d" },
      { id: "0-2", text: "Which one of the following is a possible reason for the effort, time, and cost required to develop a program to increase exponentially with the size of the program while using the build and fix style of development?", options: ["Programming languages lack suitable constructs required for the build and fix style of development","Programmers lack competence in effectively using the build and fix style","Programmers are able to use abstraction and decomposition techniques in a very limited way while using the build and fix model","Programmers are able to make limited use of GO TO statements while using the build and fix model"], answer: "c" },
      { id: "0-3", text: "A software development company is likely to face which one of the following difficulties, if it adopts the waterfall model in preference to the exploratory (build and fix) program development style in its development projects?", options: ["Increased development cost","Increased development time","Decreased program maintainability","Increased documentation overhead"], answer: "d" },
      { id: "0-4", text: "Which one among the following is not a software service type of project?", options: ["Software maintenance","Software customization","Outsourced software development","Software product development"], answer: "d" },
      { id: "0-5", text: "Model building can be considered to be an application of which one of the following techniques?", options: ["Abstraction","Decomposition","Aggregation","Composition"], answer: "a" },
      { id: "0-6", text: "Suppose you are getting an application software developed by a vendor for your organization. Which one of the following characteristics of the software delivered by the vendor to your organization is not a symptom of the present software crisis?", options: ["Fails to meet user requirements.","Expensive.","Highly interactive","Difficult to alter, debug, and enhance."], answer: "c" },
      { id: "0-7", text: "A software process model represents which one of the following?", options: ["The way in which software is developed","The way in which software processes data","The way in which software is used","The way in which software may fail"], answer: "a" },
      { id: "0-8", text: "Which one of the following is not an important difference between the software development projects being undertaken now and the ones that were being undertaken several decades back?", options: ["Project durations have shrunk from multi‐years to few months now","Project sizes have increased manifolds","Use of high‐level languages","Increased code and design reuse"], answer: "c" },
      { id: "0-9", text: "Which one of the following activities spans all stages of a software development life cycle (SDLC)?", options: ["Coding","Testing","Project management","Design"], answer: "c" }
  ]},
  { week: 1, questions: [
    { id: "1-1", text: "Which one of the following can be considered to be a job rather than a project?", options: ["Construction of a house","A political election campaign","Buying groceries from a supermarket","A wedding","Travelling to the office"], answer: "c" },
    { id: "1-2", text: "Who among the following are not a project stakeholder?", options: ["Project manager","Customer","Computer hardware maintenance personnel","Project team member","Security personnel guarding the project building"], answer: "c" },
    { id: "1-3", text: "Managing a software development project is much more challenging than managing a road construction project. Which of the following are NOT important reasons for this?", options: ["Large‐sized project","Managing something Intangible","Managing intellectual work","Large impact of any requirements change","Manpower‐intensive"], answer: "a" },
    { id: "1-4", text: "Which one of the following is not a characteristic feature of a software development project?", options: ["A software development project can have several non‐routine tasks that involve a challenge","A software development project can have several routine tasks","The resources available for a software development project are usually constrained","Every software development project has a well‐defined starting point, but may continue indefinitely","Manpower‐intensive"], answer: "d" },
    { id: "1-5", text: "Which one of the following statements concerning the business case for a project is false?", options: ["It clearly states the cost that would be incurred to complete the project","It states the benefits that are expected to accrue from undertaking the project","It presents a cost‐benefit analysis","Only after the business case is completed and approved by the project sponsor, the feasibility study is undertaken","It highlights the risks inherent in the project"], answer: "d" },
    { id: "1-6", text: "Which one of the following is the most acceptable definition of a project?", options: ["A series of activities","A set of activities undertaken within a defined time period in order to meet a specific set of goals/objectives within a budget","A coordinated effort to accomplish a well‐defined goal, but in general, can continue indefinitely","Any activity that requires human and other resources for it to proceed","A temporary endeavor undertaken to create a unique product, service, or result"], answer: "e" },
    { id: "1-7", text: "Which of the following are usually not recognized as phases of the software project management life cycle?", options: ["Execution","Initiation","Maintenance","Closing","Feasibility study"], answer: "c" },
    { id: "1-8", text: "Which one of the following most closely describes the sequence of phases of a project management life cycle?", options: ["Initiation, planning, executing, and closing.","Concept, definition, development, closure.","Initiation, definition, planning, monitoring.","Concept, definition, implementation, maintenance.","Feasibility study, planning, executing, and closing."], answer: "a" },
    { id: "1-9", text: "Which of the following are not pertinent questions to ask for defining the scope of a project?", options: ["Why is the software being built?","What will be done?","When will it be done?","Who will be the project manager?","What are the constraints and assumptions?","How will the project team be rewarded?","What is outside the scope of the project?"], answer: "d" }
  ]},
  { week: 2, questions: [
    { id: "2-1", text: "Which of the following SDLC models would be suitable for use in a moderate‐sized project involving customization of a student registration and grading package for academic institutions? Assume that the project would be developed by a team of experienced personnel and that the schedule for the project has been very aggressively set.", options: ["Spiral model","Iterative waterfall model","Classical waterfall model","V model","Agile model","Prototyping model"], answer: "e" },
    { id: "2-2", text: "Which of the following are not agile software development methodologies?", options: ["Extreme Programming (XP)","Scrum","Prototyping model","Lean software development","V model","Spiral model"], answer: "c" },
    { id: "2-3", text: "Members of a Scrum team are not expected to answer which one of the following questions during a daily Scrum meeting?", options: ["What did you do yesterday","What will you do today?","Why are you getting delayed?","What obstacles are in your way?","How do you rate your contribution to the current sprint?"], answer: "c" },
    { id: "2-4", text: "Which of the following are not true of sprints in the Scrum development process?", options: ["It is the fundamental process flow of Scrum","Different sprints in a Scrum project overlap in time","A sprint is a month‐long iteration, during which an incremental product functionality is completed","During a Sprint, customer feedback is continually obtained and the increment being developed is accordingly modified","During a sprint, each working day begins with a daily Scrum meeting"], answer: "b" },
    { id: "2-5", text: "How is agility achieved in the agile model of software development?", options: ["Elaborate documentation","Fitting the process to the project","Rigorous planning","Avoidance of things that waste time","Postponing integration testing towards the end of the project","Prototype construction"], answer: "b" }
  ]},
  { week: 3, questions: [
    { id: "3-1", text: "Generally, which one of the following is not part of the business case document?", options: ["Information & background to the proposal","Proposed project","Quality standards","Risks","The benefits"], answer: "c" },
    { id: "3-2", text: "Which element of project portfolio management deals with achieving a better balance of projects using the information gathered?", options: ["Portfolio definition","Portfolio management","Portfolio optimization","Portfolio deletion","Portfolio creation"], answer: "c" }
  ]},
  { week: 4, questions: [
    { id: "4-1", text: "Suppose a company has undertaken a software development project. Which of the following are not overhead?", options: ["Staff salary","Cost of building","Cost of lighting","Cost of networking","Cost of purchasing a computer"], answer: "a" },
    { id: "4-2", text: "In a software project, what is the fundamental measure of work?", options: ["Cost","Size","Effort","Duration"], answer: "b" }
  ]},
  { week: 5, questions: [
    { id: "5-1", text: "Which one of the following is NOT an example of a heuristic estimation technique?", options: ["Basic COCOMO","Halstead’s software science","COCOMO II","Intermediate COCOMO","Complete COCOMO"], answer: "b" }
  ]},
  { week: 6, questions: [
    { id: "6-1", text: "In the context of resource allocation, which one of the following is true regarding the cost schedule?", options: ["It indicates the planned start and completion dates for each activity","It indicates the actual start and completion dates for each activity","It shows the dates on which each resource will be required and the level of that requirement","It shows the planned cumulative expenditure incurred by the use of resources over time","It shows the actual expenditure incurred by the use of resources over time"], answer: "d" }
  ]},
  { week: 7, questions: [
    { id: "7-1", text: "Which one of the following may be the highest motivator for a senior manager of a software development organization?", options: ["Lunch allowance","House rent allowance","Paid vacation","Company‐provided car","More interesting job assignment at the same pay"], answer: "e" }
  ]},
  { week: 8, questions: [
    { id: "8-1", text: "In the context of resource allocation, which one of the following is true regarding the cost schedule?", options: ["It indicates the planned start and completion dates for each activity","It indicates the actual start and completion dates for each activity","It shows the dates on which each resource will be required and the level of that requirement","It shows the planned cumulative expenditure incurred by the use of resources over time","It shows the actual expenditure incurred by the use of resources over time"], answer: "d" }
  ]},
  { week: 9, questions: [
    { id: "9-1", text: "Code review does not target to detect which of the following types of errors:", options: ["Logical error","Algorithmic error","Syntax error","Programming errors","Coding errors"], answer: "c" }
  ]},
  { week: 10, questions: [
    { id: "10-1", text: "System accounting denotes keeping track of", options: ["who made a particular change to a configuration item","what change was exactly made","when the change was made","every version and revision","all of these"], answer: "e" }
  ]},
  { week: 11, questions: [
    { id: "11-1", text: "Which one of the following best reflects the focus of Total Quality Management (TQM) in software engineering?", options: ["Process assurance","Product assurance","Thorough testing","Thorough testing and rejection of bad products","Prevention of defects through continuous improvement","Customer satisfaction through proactive quality practices","Early detection and resolution of potential issues"], answer: "e" }
  ]},
  { week: 12, questions: [
    { id: "12-1", text: "Which one of the following are not factors contributing to higher difficulty in software reliability measurement, as compared to hardware reliability measurement?", options: ["The reliability improvement due to fixing a single bug depends on where the bug is located in the code.","The perceived reliability of a software product is observer-dependent.","The reliability of a software product keeps changing as errors are detected and fixed.","Software is invisible in contrast to hardware, though the effect of the execution of software can be observed.","Software does not deteriorate physically over time like hardware.","Software can be executed under a wide range of input conditions, leading to unpredictable failures.","Software failures are often intermittent and hard to reproduce.","Software bugs, once fixed, stay permanently fixed without introducing new problems","Software can fail without any observable external cause, unlike hardware, which often shows physical signs of wear or stress"], answer: "h" }
  ]}
];

/* ---- simple DOM helpers ---- */
const $ = s => document.querySelector(s);
const $$ = s => Array.from(document.querySelectorAll(s));

/* ---- controls ---- */
const modeEl = $('#mode');
const weekEl = $('#week');
const durationEl = $('#duration');
const startBtn = $('#startBtn');
const resetBtn = $('#resetBtn');
const downloadBtn = $('#downloadBtn');

const testArea = $('#testArea');
const questionsContainer = $('#questionsContainer');
const timerEl = $('#timer');
const modeLabel = $('#modeLabel');
const weekLabel = $('#weekLabel');
const qIndexEl = $('#qIndex');
const qTotalEl = $('#qTotal');
const prevBtn = $('#prevBtn');
const nextBtn = $('#nextBtn');
const submitBtn = $('#submitBtn');

const resultArea = $('#resultArea');
const resultSummary = $('#resultSummary');
const resultDetails = $('#resultDetails');
const retakeBtn = $('#retakeBtn');
const downloadResultBtn = $('#downloadResultBtn');

let flatQuestions = [];
let answers = {}; // id -> letter
let currentIdx = 0;
let timer = null;
let timeLeft = 0;
let isMock = false;

/* populate weeks */
function populateWeeks(){
  const weeks = QUESTION_BANK.map(w=>w.week).filter((v,i,a)=>a.indexOf(v)===i).sort((a,b)=>a-b);
  for (const w of weeks){
    const opt = document.createElement('option');
    opt.value = w;
    opt.textContent = `Week ${w}`;
    weekEl.appendChild(opt);
  }
}

/* events */
startBtn.addEventListener('click', startTest);
resetBtn.addEventListener('click', resetAll);
prevBtn.addEventListener('click', ()=>navigateTo(currentIdx-1));
nextBtn.addEventListener('click', ()=>navigateTo(currentIdx+1));
submitBtn.addEventListener('click', submitTest);
retakeBtn.addEventListener('click', resetAll);
downloadBtn.addEventListener('click', downloadQuestions);
downloadResultBtn.addEventListener('click', downloadResult);

function buildFlatQuestions(){
  const sel = weekEl.value;
  if (sel === 'all'){
    flatQuestions = QUESTION_BANK.reduce((acc,w)=>acc.concat(w.questions),[]);
  } else {
    const wk = Number(sel);
    const w = QUESTION_BANK.find(x=>x.week===wk);
    flatQuestions = w ? w.questions.slice() : [];
  }
}

function startTest(){
  buildFlatQuestions();
  if (!flatQuestions.length){ alert('No questions for selected week'); return; }
  isMock = modeEl.value === 'mock';
  answers = {};
  currentIdx = 0;
  // UI
  modeLabel.textContent = isMock ? 'Mock Test' : 'Practice';
  weekLabel.textContent = weekEl.value === 'all' ? 'All' : `Week ${weekEl.value}`;
  testArea.classList.remove('hidden');
  resultArea.classList.add('hidden');
  startBtn.disabled = true;
  resetBtn.disabled = false;
  renderQuestion();
  qTotalEl && (qTotalEl.textContent = flatQuestions.length);
  // timer
  if (isMock){
    const mins = Math.max(1, Number(durationEl.value) || 30);
    timeLeft = mins * 60;
    startTimer();
  } else {
    stopTimer();
    timerEl.textContent = 'Practice';
  }
}

function startTimer(){
  stopTimer();
  updateTimer();
  timer = setInterval(()=>{
    timeLeft--;
    updateTimer();
    if (timeLeft <= 0){
      stopTimer();
      alert('Time up! Auto-submitting...');
      submitTest();
    }
  }, 1000);
}
function stopTimer(){ if (timer){ clearInterval(timer); timer = null; } }
function updateTimer(){
  if (!isMock){ timerEl.textContent = 'Practice'; return; }
  const mm = String(Math.floor(timeLeft/60)).padStart(2,'0');
  const ss = String(timeLeft%60).padStart(2,'0');
  timerEl.textContent = `${mm}:${ss}`;
}

function renderQuestion(){
  const q = flatQuestions[currentIdx];
  questionsContainer.innerHTML = '';
  qIndexEl.textContent = currentIdx + 1;
  qTotalEl.textContent = flatQuestions.length;

  const wrapper = document.createElement('div');
  wrapper.className = 'question';

  const qtext = document.createElement('div');
  qtext.className = 'qtext';
  qtext.innerHTML = `<strong>Q${currentIdx+1}.</strong> ${escapeHtml(q.text)}`;
  wrapper.appendChild(qtext);

  const opts = document.createElement('div');
  opts.className = 'options';
  q.options.forEach((o, i) => {
    const letter = String.fromCharCode(97 + i);
    const opt = document.createElement('div');
    opt.className = 'option';
    opt.dataset.letter = letter;
    opt.innerHTML = `<strong>${letter}.</strong> ${escapeHtml(o)}`;
    if (answers[q.id] === letter) opt.classList.add('selected');

    if (!isMock && answers[q.id]){
      if (letter === q.answer) opt.classList.add('correct');
      else if (answers[q.id] === letter) opt.classList.add('wrong');
    }

    opt.addEventListener('click', ()=>{
      answers[q.id] = letter;
      // visuals
      opts.querySelectorAll('.option').forEach(x=>x.classList.remove('selected','correct','wrong'));
      opt.classList.add('selected');
      if (!isMock){
        opts.querySelectorAll('.option').forEach(x=>{
          const l = x.dataset.letter;
          if (l === q.answer) x.classList.add('correct');
          else if (answers[q.id] === l) x.classList.add('wrong');
        });
      }
    });
    opts.appendChild(opt);
  });

  wrapper.appendChild(opts);
  questionsContainer.appendChild(wrapper);
  updateNavButtons();
}

function updateNavButtons(){
  prevBtn.disabled = currentIdx <= 0;
  nextBtn.disabled = currentIdx >= flatQuestions.length - 1;
  submitBtn.disabled = false;
}

function navigateTo(idx){
  if (idx < 0 || idx >= flatQuestions.length) return;
  currentIdx = idx;
  renderQuestion();
}

function submitTest(){
  stopTimer();
  // calculate
  let correct = 0;
  const details = flatQuestions.map((q, idx)=>{
    const chosen = answers[q.id] || null;
    const isCorrect = chosen === q.answer;
    if (isCorrect) correct++;
    return { qno: idx+1, id: q.id, text: q.text, chosen, answer: q.answer, options: q.options };
  });

  testArea.classList.add('hidden');
  resultArea.classList.remove('hidden');

  const percent = Math.round((correct / flatQuestions.length) * 100);
  resultSummary.innerHTML = `<strong>Score:</strong> ${correct} / ${flatQuestions.length} (${percent}%)`;
  resultDetails.innerHTML = '';
  details.forEach(d=>{
    const div = document.createElement('div');
    div.className = 'result-item';
    const chosenText = d.chosen ? `${d.chosen}. ${escapeHtml(d.options[d.chosen.charCodeAt(0)-97]||'')}` : '<em>Not answered</em>';
    const ansText = `${d.answer}. ${escapeHtml(d.options[d.answer.charCodeAt(0)-97]||'')}`;
    div.innerHTML = `<div class="meta"><strong>Q${d.qno}:</strong> ${escapeHtml(d.text)}</div>
                     <div><strong>Your answer:</strong> ${chosenText}</div>
                     <div><strong>Correct:</strong> ${ansText}</div>`;
    resultDetails.appendChild(div);
  });

  // store last result in memory to allow download or retake
  window._lastResult = { correct, total: flatQuestions.length, details, timestamp: new Date().toISOString() };
}

function resetAll(){
  stopTimer();
  startBtn.disabled = false;
  resetBtn.disabled = true;
  testArea.classList.add('hidden');
  resultArea.classList.add('hidden');
  questionsContainer.innerHTML = '';
  timerEl.textContent = '—';
  answers = {};
  flatQuestions = [];
}

/* small utilities */
function escapeHtml(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

/* download helpers */
function downloadQuestions(){
  const data = { generatedAt: new Date().toISOString(), questionBank: QUESTION_BANK };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'software_project_management_questions.json';
  document.body.appendChild(a); a.click(); a.remove();
  URL.revokeObjectURL(url);
}
function downloadResult(){
  if (!window._lastResult){ alert('No result to download.'); return; }
  const blob = new Blob([JSON.stringify(window._lastResult, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'mocktest_result.json';
  document.body.appendChild(a); a.click(); a.remove();
  URL.revokeObjectURL(url);
}

/* init */
populateWeeks();

/* Manifest Fellowship UCU - X/Twitter Style App */

/* ─── SVG ICONS ─── */
const Icons = {
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>',
  members: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  attendance: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>',
  followup: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  more: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  xmark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  bell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
  souls: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
  settings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
  logout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>',
  export: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
  import: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
  arrowUp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
  userPlus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>',
  mapPin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  messageCircle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',
  trendingUp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
};

/* ─── STATE ─── */
const STATE = {
  user: null,
  members: [],
  config: null,
  announcements: [],
  currentPage: 'dashboard',
  attendanceCache: null, followupCache: null, firstTimersCache: null, soulsWonCache: null,
};

/* ─── UTILS ─── */
const Utils = {
  hashSHA256: async (s) => {
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s));
    return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2,'0')).join('');
  },
  formatDate: (d) => { const dt = new Date(d+'T00:00:00'); return dt.toLocaleDateString('en-UG',{weekday:'short',day:'numeric',month:'short',year:'numeric'}); },
  formatDateShort: (d) => { const dt = new Date(d+'T00:00:00'); return dt.toLocaleDateString('en-UG',{day:'numeric',month:'short'}); },
  todayStr: () => new Date().toISOString().split('T')[0],
  dayName: (d) => ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][new Date(d+'T00:00:00').getDay()],
  getWeekRange: () => {
    const n=new Date(), d=n.getDay(), m=new Date(n); m.setDate(n.getDate()-((d+6)%7));
    const s=new Date(m); s.setDate(m.getDate()+6);
    return {start:m.toISOString().split('T')[0],end:s.toISOString().split('T')[0],label:Utils.formatDateShort(m.toISOString().split('T')[0])+' - '+Utils.formatDateShort(s.toISOString().split('T')[0])};
  },
  showToast: (msg, type='info') => {
    const c=document.getElementById('toast-container'), t=document.createElement('div');
    t.className='toast '+type; t.textContent=msg; c.appendChild(t);
    setTimeout(()=>t.remove(),3500);
  },
  getLS: (k) => { try{const d=localStorage.getItem('manifest_'+k);return d?JSON.parse(d):null}catch{return null} },
  setLS: (k,v) => { try{localStorage.setItem('manifest_'+k,JSON.stringify(v))}catch(e){console.warn(e)} },
  removeLS: (k) => { try{localStorage.removeItem('manifest_'+k)}catch(e){console.warn(e)} },
  id: () => Date.now().toString(36)+Math.random().toString(36).slice(2,6),
  svg: (name) => Icons[name] || '',
};

/* ─── DATA ─── */
const Data = {
  async loadAll() {
    await Promise.all([this.loadMembers(), this.loadConfig(), this.loadAnnouncements()]);
    this.loadLocalData();
  },
  async loadMembers() {
    try { const r=await fetch('data/members.json'); STATE.members=(await r.json()).members; }
    catch(e){console.error('Members error:',e); Utils.showToast('Failed to load members','error'); }
  },
  async loadConfig() {
    try { const r=await fetch('data/config.json'); STATE.config=await r.json(); }
    catch(e){console.error('Config error:',e);}
  },
  async loadAnnouncements() {
    try { const r=await fetch('data/announcements.json'); STATE.announcements=(await r.json()).announcements||[]; }
    catch(e){console.error('Announcements error:',e);}
  },
  loadLocalData() {
    STATE.attendanceCache=Utils.getLS('attendance')||{events:[]};
    STATE.followupCache=Utils.getLS('followup')||{assignments:[]};
    STATE.firstTimersCache=Utils.getLS('firsttimers')||{firstTimers:[]};
    STATE.soulsWonCache=Utils.getLS('soulswon')||{soulsWon:[]};
  },
  getMembers(){return STATE.members;}
  ,getMember(id){return STATE.members.find(m=>m.id===id);}
  ,getAttendance(){return STATE.attendanceCache;}
  ,saveAttendance(d){STATE.attendanceCache=d;Utils.setLS('attendance',d);}
  ,getFollowUp(){return STATE.followupCache;}
  ,saveFollowUp(d){STATE.followupCache=d;Utils.setLS('followup',d);}
  ,getFirstTimers(){return STATE.firstTimersCache;}
  ,saveFirstTimers(d){STATE.firstTimersCache=d;Utils.setLS('firsttimers',d);}
  ,getSoulsWon(){return STATE.soulsWonCache;}
  ,saveSoulsWon(d){STATE.soulsWonCache=d;Utils.setLS('soulswon',d);}
  ,getEvents(){return STATE.config?STATE.config.events:[];}
  ,getAnnouncements(){return STATE.announcements;}
  ,importMembersFromJSON(s){try{const d=JSON.parse(s);const m=d.members||(Array.isArray(d)?d:[]);if(!m.length)throw new Error('Empty');STATE.members=m;Utils.showToast('Imported '+m.length+' members','success');return true}catch(e){Utils.showToast('Import failed: '+e.message,'error');return false}}
  ,exportLocalData(){return{exportedAt:new Date().toISOString(),attendance:STATE.attendanceCache,followup:STATE.followupCache,firstTimers:STATE.firstTimersCache,soulsWon:STATE.soulsWonCache}}
  ,importLocalData(s){try{const d=JSON.parse(s);if(d.attendance)this.saveAttendance(d.attendance);if(d.followup)this.saveFollowUp(d.followup);if(d.firstTimers)this.saveFirstTimers(d.firstTimers);if(d.soulsWon)this.saveSoulsWon(d.soulsWon);Utils.showToast('Data imported','success');return true}catch(e){Utils.showToast('Import failed','error');return false}}
};

/* ─── AUTH ─── */
const Auth = {
  async login(u,p) {
    const h=await Utils.hashSHA256(p);
    const user=STATE.config.users.find(x=>x.username===u&&x.passwordHash===h);
    if(!user){document.getElementById('login-error').style.display='block';return false}
    STATE.user=user; sessionStorage.setItem('manifest_user',JSON.stringify(user));
    document.getElementById('login-screen').classList.remove('active');
    document.getElementById('app').classList.add('active');
    document.getElementById('login-form').reset();
    this.updateUI(); return true;
  },
  logout() {
    STATE.user=null; sessionStorage.removeItem('manifest_user');
    document.getElementById('app').classList.remove('active');
    document.getElementById('login-screen').classList.add('active');
    document.getElementById('login-error').style.display='none';
  },
  checkSession() {
    const s=sessionStorage.getItem('manifest_user');
    if(s){try{STATE.user=JSON.parse(s);
      document.getElementById('login-screen').classList.remove('active');
      document.getElementById('app').classList.add('active');
      this.updateUI();return true}catch{}}
    return false;
  },
  updateUI() {
    if(!STATE.user)return;
    document.getElementById('header-title').textContent='Dashboard';
  },
  hasRole(r){return r.includes(STATE.user?.role);}
};

/* ─── ROUTER ─── */
const Router = {
  navigate(page) {
    STATE.currentPage=page;
    document.querySelectorAll('.tab-item').forEach(t=>t.classList.toggle('active',t.dataset.tab===page));
    const titles={dashboard:'Dashboard',members:'Members',attendance:'Attendance',followup:'Follow-up',more:'More',
      soulswon:'Souls Won',notifications:'Notifications',admin:'Admin'};
    document.getElementById('header-title').textContent=titles[page]||'Dashboard';
    const c=document.getElementById('page-content');
    c.innerHTML='<div class="loading"><div class="spinner"></div></div>';
    const fn={dashboard:Views.dashboard,members:Views.members,attendance:Views.attendance,
      followup:Views.followup,soulswon:Views.soulsWon,notifications:Views.notifications,admin:Views.admin};
    if(fn[page])fn[page](); else Views.dashboard();
    c.scrollTop=0;
  },
  openTab(tab) {
    // For secondary tabs in more menu
    Router.navigate(tab);
  }
};

/* ─── VIEWS ─── */
const Views = {

  /* DASHBOARD */
  dashboard() {
    const m=Data.getMembers(), att=Data.getAttendance(), souls=Data.getSoulsWon(), ann=Data.getAnnouncements();
    const total=m.length, active=m.filter(x=>x.status==='active').length;
    const ftMembers=m.filter(x=>x.status==='first-timer').length;
    const tSouls=souls.soulsWon.length;
    const lastE=att.events.length?att.events[att.events.length-1]:null;
    const lastP=lastE?lastE.records.filter(r=>r.present).length:0;
    const events=Data.getEvents(), tName=Utils.dayName(Utils.todayStr());

    const html=`
      <div class="stats-row">
        <div class="stat-tile"><div class="stat-num">${total}</div><div class="stat-label">Members</div></div>
        <div class="stat-tile green"><div class="stat-num">${active}</div><div class="stat-label">Active</div></div>
        <div class="stat-tile yellow"><div class="stat-num">${ftMembers}</div><div class="stat-label">First-Timers</div></div>
        <div class="stat-tile blue"><div class="stat-num">${tSouls}</div><div class="stat-label">Souls Won</div></div>
      </div>
      <div class="section">
        <div class="section-header"><h3>This Week</h3></div>
        <div class="section-body">
          ${events.map(e=>{
            const isT=e.day===tName;
            return `<div class="event-card">
              <div class="event-day-badge${isT?' today':''}"><span class="day-num">${e.day.slice(0,3)}</span></div>
              <div class="event-info"><div class="event-name">${e.name}${isT?' <span style="color:var(--accent-green);font-size:11px;">· Today</span>':''}</div><div class="event-time">${e.day}s ${e.time}</div></div>
              <div class="event-actions"><button class="x-btn x-btn-secondary x-btn-sm" onclick="Views.exportICal()">${Utils.svg('download')}</button></div>
            </div>`;
          }).join('')}
        </div>
      </div>
      <div class="section">
        <div class="section-header"><h3>Last Service</h3></div>
        ${lastE?`
          <div class="feed-card">
            <div class="flex-between"><span style="font-size:14px;font-weight:600;">${Utils.formatDate(lastE.date)}</span><span style="font-size:13px;color:var(--accent-green);font-weight:600;">${lastP} present</span></div>
            <div class="attendance-bar"><div class="bar-present" style="flex:${lastP}"></div><div class="bar-absent" style="flex:${lastE.records.length-lastP}"></div></div>
            <div class="attendance-stats"><span><span class="dot green"></span>${lastP} present</span><span><span class="dot red"></span>${lastE.records.length-lastP} absent</span></div>
          </div>`:
          `<div class="empty-state"><div class="empty-icon">${Utils.svg('calendar')}</div><p>No attendance yet</p><button class="x-btn x-btn-primary x-btn-sm mt-16" onclick="Router.navigate('attendance')">Mark Attendance</button></div>`}
      </div>
      <div class="section">
        <div class="section-header"><h3>Announcements</h3></div>
        ${ann.length?ann.map(a=>`
          <div class="announcement${a.priority==='high'?' high':''}">
            <div class="ann-title">${a.title}</div>
            <div class="ann-meta">${a.author} · ${new Date(a.posted).toLocaleDateString()}</div>
            <div class="ann-body">${a.body}</div>
          </div>`).join(''):'<div class="empty-state"><p>No announcements</p></div>'}
      </div>
    `;
    document.getElementById('page-content').innerHTML=html;
  },

  /* MEMBERS */
  members() {
    const all=Data.getMembers();
    const html=`
      <div class="member-search"><span class="search-icon">${Utils.svg('search')}</span>
        <input type="text" id="ms" placeholder="Search members..." oninput="Views.filterMembers2()">
      </div>
      <div class="filter-row" id="filter-row">
        <button class="filter-chip active" data-f="all" onclick="Views.setFilter('all')">All ${all.length}</button>
        <button class="filter-chip" data-f="UCU" onclick="Views.setFilter('UCU')">UCU</button>
        <button class="filter-chip" data-f="Non-UCU" onclick="Views.setFilter('Non-UCU')">Non-UCU</button>
        <button class="filter-chip" data-f="" onclick="Views.setFilter('')">Unknown</button>
      </div>
      <div id="member-list">${Views.renderMemberList(all)}</div>
    `;
    document.getElementById('page-content').innerHTML=html;
    window._memFilter='all'; window._memSearch='';
  },

  renderMemberList(members) {
    if(!members.length) return '<div class="empty-state"><div class="empty-icon">'+Utils.svg('members')+'</div><p>No members found</p></div>';
    return members.map(m=>{
      const initial=m.name.charAt(0).toUpperCase();
      const inst=m.institution||'';
      const instBadge=inst?`<span class="badge ${inst==='UCU'?'ucu':inst==='Non-UCU'?'non-ucu':'unknown'}">${inst}</span>`:'';
      return `<div class="member-row">
        <div class="member-avatar">${initial}</div>
        <div class="member-info">
          <div class="member-name">${m.name}</div>
          <div class="member-detail">${m.course||''}${m.course&&m.year?' · ':''}${m.year?'Year '+m.year:''}${m.residence?' · '+m.residence:''}</div>
        </div>
        <div class="member-badge">${instBadge}</div>
      </div>`;
    }).join('');
  },

  setFilter(val) {
    window._memFilter=val;
    document.querySelectorAll('.filter-chip').forEach(c=>c.classList.toggle('active',c.dataset.f===val));
    Views.filterMembers2();
  },

  filterMembers2() {
    const q=(document.getElementById('ms')?.value||'').toLowerCase();
    window._memSearch=q;
    const filt=window._memFilter||'all';
    const all=Data.getMembers();
    const f=all.filter(m=>{
      if(filt!=='all' && m.institution!==filt) return false;
      if(q && !m.name.toLowerCase().includes(q) && !m.phone.includes(q) && !(m.course||'').toLowerCase().includes(q)) return false;
      return true;
    });
    const el=document.getElementById('member-list');
    if(el) el.innerHTML=Views.renderMemberList(f);
  },

  /* ATTENDANCE */
  attendance() {
    const html=`
      <div class="x-tabs">
        <button class="x-tab active" onclick="Views.switchAttTab('mark',this)">Mark</button>
        <button class="x-tab" onclick="Views.switchAttTab('history',this)">History</button>
        <button class="x-tab" onclick="Views.switchAttTab('analytics',this)">Analytics</button>
      </div>
      <div id="att-content">${Views.renderAttMark()}</div>
    `;
    document.getElementById('page-content').innerHTML=html;
  },

  switchAttTab(tab,btn) {
    document.querySelectorAll('.x-tabs .x-tab').forEach(t=>t.classList.remove('active'));
    btn.classList.add('active');
    const c=document.getElementById('att-content');
    if(tab==='mark') c.innerHTML=Views.renderAttMark();
    else if(tab==='history') c.innerHTML=Views.renderAttHistory();
    else c.innerHTML=Views.renderAttAnalytics();
  },

  renderAttMark() {
    const today=Utils.todayStr(), dName=Utils.dayName(today);
    const members=Data.getMembers().filter(m=>m.status!=='first-timer');
    const att=Data.getAttendance();
    let event=att.events.find(e=>e.date===today);
    if(!event && dName==='Wednesday') {
      event={id:Utils.id(),date:today,eventType:'main-service',label:'Fellowship Service',records:members.map(m=>({memberId:m.id,present:false,isFirstTimer:false,notes:''}))};
    }
    window._attEvent=event;
    window._attToggle=(mid,val)=>{
      const e=window._attEvent; if(!e)return;
      const r=e.records.find(x=>x.memberId===mid); if(!r)return;
      r.present=val;
      const a=Data.getAttendance();
      const i=a.events.findIndex(x=>x.id===e.id);
      if(i>=0)a.events[i]=e; else a.events.push(e);
      Data.saveAttendance(a);
      Views.renderAttMarkPartial();
    };

    if(!event) return `<div class="empty-state"><div class="empty-icon">${Utils.svg('calendar')}</div><p>No event today</p><button class="x-btn x-btn-primary mt-16" onclick="Views.createAttEvent()">${Utils.svg('plus')} Create</button></div>`;

    const p=event.records.filter(r=>r.present).length;
    const a=event.records.length-p;

    return `<div class="flex-between" style="padding:12px 16px 0;">
      <div><strong style="font-size:15px;">${Utils.formatDate(today)}</strong><span style="color:var(--text-secondary);font-size:13px;margin-left:6px;">${dName}</span></div>
      <div style="display:flex;gap:8px;align-items:center;font-size:13px;"><span style="color:var(--accent-green);font-weight:600;">${p}</span><span style="color:var(--text-secondary);">/</span><span style="color:var(--accent-red);">${a}</span></div>
    </div>
    <div class="att-list" id="att-list">
      ${event.records.map(r=>{
        const mem=Data.getMember(r.memberId);
        if(!mem)return'';
        return `<div class="att-item">
          <span class="att-name">${mem.name}</span>
          <button class="att-toggle${r.present?' present':''}" onclick="window._attToggle('${mem.id}',${!r.present})">${r.present?Utils.svg('check'):Utils.svg('xmark')}</button>
        </div>`;
      }).join('')}
    </div>`;
  },

  renderAttMarkPartial() {
    const el=document.getElementById('att-list');
    const event=window._attEvent; if(!el||!event)return;
    el.innerHTML=event.records.map(r=>{
      const mem=Data.getMember(r.memberId);
      if(!mem)return'';
      return `<div class="att-item"><span class="att-name">${mem.name}</span>
        <button class="att-toggle${r.present?' present':''}" onclick="window._attToggle('${mem.id}',${!r.present})">${r.present?Utils.svg('check'):Utils.svg('xmark')}</button></div>`;
    }).join('');
    // Update counts
    const p=event.records.filter(x=>x.present).length;
    const a=event.records.length-p;
    const bar=document.querySelector('.flex-between[style*="padding:12px"]');
    if(bar) bar.innerHTML=`<div><strong style="font-size:15px;">${Utils.formatDate(Utils.todayStr())}</strong><span style="color:var(--text-secondary);font-size:13px;margin-left:6px;">${Utils.dayName(Utils.todayStr())}</span></div><div style="display:flex;gap:8px;align-items:center;font-size:13px;"><span style="color:var(--accent-green);font-weight:600;">${p}</span><span style="color:var(--text-secondary);">/</span><span style="color:var(--accent-red);">${a}</span></div>`;
  },

  createAttEvent() {
    const t=Utils.todayStr();
    const members=Data.getMembers().filter(m=>m.status!=='first-timer');
    const att=Data.getAttendance();
    const e={id:Utils.id(),date:t,eventType:'main-service',label:'Fellowship Service',records:members.map(m=>({memberId:m.id,present:false,isFirstTimer:false,notes:''}))};
    att.events.push(e); Data.saveAttendance(att);
    Views.attendance();
  },

  renderAttHistory() {
    const att=Data.getAttendance();
    if(!att.events.length) return '<div class="empty-state"><div class="empty-icon">'+Utils.svg('calendar')+'</div><p>No history</p></div>';
    const s=[...att.events].sort((a,b)=>b.date.localeCompare(a.date));
    return `<div class="table-wrap" style="padding:0 16px;">
      <table class="data-table">
        <thead><tr><th>Date</th><th>Present</th><th>Absent</th><th>%</th></tr></thead>
        <tbody>${s.map(e=>{
          const p=e.records.filter(r=>r.present).length, t=e.records.length;
          return `<tr><td>${Utils.formatDateShort(e.date)}</td><td style="color:var(--accent-green);font-weight:600;">${p}</td><td style="color:var(--accent-red);">${t-p}</td><td><div style="background:var(--border);border-radius:4px;height:6px;width:50px;"><div style="width:${t?Math.round(p/t*100):0}%;height:6px;background:var(--accent-blue);border-radius:4px;"></div></div></td></tr>`;
        }).join('')}</tbody>
      </table>
    </div>`;
  },

  renderAttAnalytics() {
    const att=Data.getAttendance(), ev=att.events;
    if(!ev.length) return '<div class="empty-state"><div class="empty-icon">'+Utils.svg('trendingUp')+'</div><p>No analytics yet</p></div>';
    const s=[...ev].sort((a,b)=>a.date.localeCompare(b.date));
    const tp=s.reduce((sum,e)=>sum+e.records.filter(r=>r.present).length,0);
    const tt=s.reduce((sum,e)=>sum+e.records.length,0);
    const avg=Math.round(tp/s.length), avgP=tt?Math.round(tp/tt*100):0;
    const last4=s.slice(-4);
    return `
      <div class="stats-row">
        <div class="stat-tile"><div class="stat-num">${s.length}</div><div class="stat-label">Services</div></div>
        <div class="stat-tile green"><div class="stat-num">${avg}</div><div class="stat-label">Avg</div></div>
        <div class="stat-tile blue"><div class="stat-num">${avgP}%</div><div class="stat-label">Fill Rate</div></div>
        <div class="stat-tile"><div class="stat-num">${tp}</div><div class="stat-label">Total</div></div>
      </div>
      ${last4.length>1?`<div class="section"><div class="section-header"><h3>Trend</h3></div>
        <div class="trend-bars" style="padding:0 16px;">${last4.map(e=>{
          const pct=Math.round(e.records.filter(r=>r.present).length/e.records.length*100);
          return `<div class="trend-bar"><div class="bar" style="height:${pct}%;"></div><span class="bar-label">${Utils.formatDateShort(e.date)}</span></div>`;
        }).join('')}</div></div>`:''}
    `;
  },

  /* FOLLOW-UP */
  followup() {
    const html=`
      <div class="x-tabs">
        <button class="x-tab active" onclick="Views.switchFUTab('assignments',this)">My Assignments</button>
        <button class="x-tab" onclick="Views.switchFUTab('firsttimers',this)">First-Timers</button>
        <button class="x-tab" onclick="Views.switchFUTab('manage',this)">Manage</button>
      </div>
      <div id="fu-content">${Views.renderFUAssignments()}</div>
    `;
    document.getElementById('page-content').innerHTML=html;
  },

  switchFUTab(tab,btn) {
    document.querySelectorAll('.x-tabs .x-tab').forEach(t=>t.classList.remove('active'));
    btn.classList.add('active');
    const c=document.getElementById('fu-content');
    if(tab==='assignments')c.innerHTML=Views.renderFUAssignments();
    else if(tab==='firsttimers')c.innerHTML=Views.renderFUFirstTimers();
    else c.innerHTML=Views.renderFUManage();
  },

  renderFUAssignments() {
    const fu=Data.getFollowUp();
    const userId=STATE.user?.displayName||'';
    let as=fu.assignments;
    if(STATE.user?.role!=='admin'&&STATE.user?.role!=='leader'){
      as=as.filter(a=>{const min=Data.getMember(a.ministerId);return min&&min.name.toLowerCase().includes((STATE.user.displayName||'').toLowerCase())});
    }
    if(!as.length) return '<div class="empty-state"><div class="empty-icon">'+Utils.svg('followup')+'</div><p>No assignments</p></div>';
    return `<div style="padding:0 16px;">
      ${as.map(a=>{
        const c=Data.getMember(a.contactId), min=Data.getMember(a.ministerId);
        if(!c)return'';
        return `<div class="member-row">
          <div class="member-avatar" style="background:var(--bg-elevated);color:var(--text-secondary);font-size:13px;">${Utils.svg('followup')}</div>
          <div class="member-info"><div class="member-name">${c.name}</div><div class="member-detail">${c.phone}${min?' · Assigned to '+min.name:''}</div></div>
          <div><select class="status-select" onchange="Views.updateFUStatus('${a.id}',this.value)">
            ${['pending','called','reached','prayed-with','visiting','completed'].map(s=>`<option value="${s}"${a.status===s?' selected':''}>${s}</option>`).join('')}
          </select></div>
        </div>`;
      }).join('')}
    </div>`;
  },

  updateFUStatus(id,status) {
    const fu=Data.getFollowUp();
    const a=fu.assignments.find(x=>x.id===id);
    if(a){a.status=status;a.lastContactDate=Utils.todayStr();Data.saveFollowUp(fu);Utils.showToast('Updated','success');Views.renderFUAssignments();}
  },

  renderFUFirstTimers() {
    const ft=Data.getFirstTimers().firstTimers;
    return `<div style="padding:0 16px;">
      <div class="flex-between" style="padding:12px 0;"><h3 style="font-size:15px;font-weight:700;">First-Timers</h3>
        <button class="x-btn x-btn-primary x-btn-sm" onclick="Views.showModal('add-firsttimer')">${Utils.svg('plus')} Add</button>
      </div>
      ${ft.length?ft.map(f=>{
        const min=Data.getMember(f.assignedTo);
        return `<div class="member-row">
          <div class="member-avatar" style="background:var(--accent-yellow);color:#000;">${f.name.charAt(0)}</div>
          <div class="member-info"><div class="member-name">${f.name}</div><div class="member-detail">${f.phone} · ${f.firstVisitDate?Utils.formatDateShort(f.firstVisitDate):''}${f.howHeard?' · '+f.howHeard:''}</div></div>
          <div><span class="badge ${f.followUpStatus||'pending'}">${f.followUpStatus||'pending'}</span></div>
        </div>`;
      }).join(''):'<div class="empty-state"><p>No first-timers</p></div>'}
    </div>`;
  },

  renderFUManage() {
    if(!Auth.hasRole(['admin','leader'])) return '<div class="empty-state"><p>Admin only</p></div>';
    const fu=Data.getFollowUp();
    return `<div style="padding:0 16px;">
      <div class="flex-between" style="padding:12px 0;"><h3 style="font-size:15px;font-weight:700;">Assignments</h3>
        <button class="x-btn x-btn-primary x-btn-sm" onclick="Views.showModal('assign')">${Utils.svg('plus')} Assign</button>
      </div>
      ${fu.assignments.length?fu.assignments.map(a=>{
        const min=Data.getMember(a.ministerId), c=Data.getMember(a.contactId);
        return `<div class="member-row">
          <div class="member-info"><div class="member-name">${c?c.name:'?'}</div><div class="member-detail">${min?'→ '+min.name:''}</div></div>
          <div><button class="x-btn-icon" onclick="Views.removeFU('${a.id}')">${Utils.svg('trash')}</button></div>
        </div>`;
      }).join(''):'<div class="empty-state"><p>No assignments</p></div>'}
    </div>`;
  },

  removeFU(id) {
    if(!confirm('Remove?'))return;
    const fu=Data.getFollowUp(); fu.assignments=fu.assignments.filter(a=>a.id!==id); Data.saveFollowUp(fu);
    Utils.showToast('Removed','success'); Views.renderFUManage();
  },

  /* SOULS WON */
  soulsWon() {
    const souls=Data.getSoulsWon(), list=souls.soulsWon;
    const total=list.length, out=list.filter(s=>s.context==='outreach').length,
      st=list.filter(s=>s.context==='street-preaching').length, sv=list.filter(s=>s.context==='service').length;
    const html=`
      <div class="stats-row">
        <div class="stat-tile"><div class="stat-num">${total}</div><div class="stat-label">Total</div></div>
        <div class="stat-tile green"><div class="stat-num">${out}</div><div class="stat-label">Outreach</div></div>
        <div class="stat-tile blue"><div class="stat-num">${st}</div><div class="stat-label">Street</div></div>
        <div class="stat-tile yellow"><div class="stat-num">${sv}</div><div class="stat-label">Service</div></div>
      </div>
      <div style="padding:0 16px;">
        <div class="flex-between" style="padding:12px 0;"><h3 style="font-size:15px;font-weight:700;">Records</h3>
          <button class="x-btn x-btn-primary x-btn-sm" onclick="Views.showModal('add-soul')">${Utils.svg('plus')} Add</button>
        </div>
        ${list.length?[...list].reverse().map(s=>{
          const w=Data.getMember(s.wonBy);
          return `<div class="member-row">
            <div class="member-avatar" style="background:var(--accent-green);">${s.name.charAt(0)}</div>
            <div class="member-info"><div class="member-name">${s.name}</div><div class="member-detail">${s.dateWon?Utils.formatDateShort(s.dateWon):''}${s.context?' · '+s.context.replace('-',' '):''}${w?' · '+w.name:''}</div></div>
            <div><button class="x-btn-icon" onclick="Views.removeSoul('${s.id}')">${Utils.svg('trash')}</button></div>
          </div>`;
        }).join(''):'<div class="empty-state"><div class="empty-icon">'+Utils.svg('souls')+'</div><p>No souls won yet</p></div>'}
      </div>
    `;
    document.getElementById('page-content').innerHTML=html;
  },

  removeSoul(id) {
    if(!confirm('Remove?'))return;
    const s=Data.getSoulsWon(); s.soulsWon=s.soulsWon.filter(x=>x.id!==id); Data.saveSoulsWon(s);
    Utils.showToast('Removed','success'); Views.soulsWon();
  },

  /* NOTIFICATIONS */
  notifications() {
    const events=Data.getEvents();
    const html=`
      <div class="section"><div class="section-header"><h3>Schedule</h3></div>
        ${events.map(e=>`<div class="event-card"><div class="event-day-badge"><span class="day-num">${e.day.slice(0,3)}</span></div>
          <div class="event-info"><div class="event-name">${e.name}</div><div class="event-time">${e.day}s at ${e.time}</div></div>
          <div class="event-actions"><button class="x-btn x-btn-secondary x-btn-sm" onclick="Views.exportICal()">${Utils.svg('download')}</button></div>
        </div>`).join('')}
      </div>
      <div class="section">
        <div class="feed-card">
          <div class="card-title">${Utils.svg('bell')} Notifications</div>
          <p class="text-secondary text-sm mb-16">Enable browser notifications to get event reminders while this tab is open.</p>
          <button class="x-btn x-btn-primary" onclick="Views.enableNotifications()">${Utils.svg('bell')} Enable</button>
          <span id="notif-status" style="margin-left:8px;font-size:13px;color:var(--text-secondary);"></span>
          <div class="mt-16" style="padding:12px;background:var(--bg-hover);border-radius:8px;font-size:13px;color:var(--text-secondary);">
            <strong>Tip:</strong> For reliable reminders on your phone, download the iCal file and open it — your calendar app will handle notifications.
          </div>
        </div>
      </div>
    `;
    document.getElementById('page-content').innerHTML=html;
  },

  enableNotifications() {
    if(!('Notification'in window)){Utils.showToast('Not supported','warning');return}
    Notification.requestPermission().then(p=>{
      const s=document.getElementById('notif-status');
      if(p==='granted'){s.textContent='Enabled ✓';new Notification('Manifest Fellowship UCU',{body:'Notifications active!',icon:'assets/logo.jpeg'});}
      else s.textContent='Blocked';
    });
  },

  exportICal() {
    const ev=Data.getEvents(), dayMap={Sunday:0,Monday:1,Tuesday:2,Wednesday:3,Thursday:4,Friday:5,Saturday:6};
    const dayNames=['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'];
    let ics=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Manifest Fellowship UCU//EN','CALSCALE:GREGORIAN','METHOD:PUBLISH','X-WR-CALNAME:Manifest Fellowship UCU'];
    ev.forEach(e=>{
      const dn=dayMap[e.day]??3,[h,m]=e.time.split(':').map(Number);
      const n=new Date(), cd=n.getDay(), d2=new Date(n); d2.setDate(n.getDate()+dn-cd);
      const ds=d2.toISOString().replace(/[-:]/g,'').split('.')[0].slice(0,15);
      const ss=ds+'T'+e.time.replace(':','')+'00', eh=h+1, es=ds+'T'+e.time.replace(':','')+'00';
      ics.push('BEGIN:VEVENT','DTSTART:'+ss,'DTEND:'+es,'RRULE:FREQ=WEEKLY;BYDAY='+dayNames[dn].slice(0,2),'SUMMARY:'+e.name+' - Manifest Fellowship UCU','DESCRIPTION:'+e.name+' at '+e.day+'s '+e.time+'\\nManifest Fellowship UCU','END:VEVENT');
    });
    ics.push('END:VCALENDAR');
    const blob=new Blob([ics.join('\r\n')],{type:'text/calendar'}),url=URL.createObjectURL(blob);
    const a=document.createElement('a');a.href=url;a.download='manifest-events.ics';a.click();URL.revokeObjectURL(url);
    Utils.showToast('Calendar downloaded','success');
  },

  /* ADMIN */
  admin() {
    if(!Auth.hasRole(['admin','leader'])) return void(document.getElementById('page-content').innerHTML='<div class="empty-state"><p>Admin access required</p></div>');
    const html=`
      <div class="x-tabs">
        <button class="x-tab active" onclick="Views.switchAdminTab('announce',this)">Announce</button>
        <button class="x-tab" onclick="Views.switchAdminTab('data',this)">Data</button>
        <button class="x-tab" onclick="Views.switchAdminTab('backup',this)">Backup</button>
      </div>
      <div id="admin-content">${Views.renderAdminAnnounce()}</div>
    `;
    document.getElementById('page-content').innerHTML=html;
  },

  switchAdminTab(tab,btn) {
    document.querySelectorAll('.x-tabs .x-tab').forEach(t=>t.classList.remove('active')); btn.classList.add('active');
    const c=document.getElementById('admin-content');
    if(tab==='announce')c.innerHTML=Views.renderAdminAnnounce();
    else if(tab==='data')c.innerHTML=Views.renderAdminData();
    else c.innerHTML=Views.renderAdminBackup();
  },

  renderAdminAnnounce() {
    return `<div class="feed-card" style="margin:8px 16px;">
      <div class="card-title">Post Announcement</div>
      <div class="x-field"><label>Title</label><input id="ann-title" placeholder="Title"></div>
      <div class="x-field"><label>Message</label><textarea id="ann-body" rows="3" placeholder="Write..."></textarea></div>
      <div class="x-field"><label>Priority</label><select id="ann-priority"><option value="normal">Normal</option><option value="high">High</option></select></div>
      <button class="x-btn x-btn-primary" onclick="Views.postAnnounce()">${Utils.svg('plus')} Post</button>
    </div>
    <div class="section"><div class="section-header"><h3>Recent</h3></div>
      ${Data.getAnnouncements().length?Data.getAnnouncements().slice(-5).reverse().map(a=>`
        <div class="announcement${a.priority==='high'?' high':''}"><div class="ann-title">${a.title}</div><div class="ann-meta">${a.author} · ${new Date(a.posted).toLocaleDateString()}</div><div class="ann-body">${a.body}</div></div>
      `).join(''):'<div class="empty-state"><p>No announcements</p></div>'}
    </div>`;
  },

  postAnnounce() {
    const t=document.getElementById('ann-title').value.trim(), b=document.getElementById('ann-body').value.trim();
    if(!t||!b){Utils.showToast('Title and message required','warning');return}
    STATE.announcements.push({id:Utils.id(),title:t,body:b,author:STATE.user?.displayName||'Admin',posted:new Date().toISOString(),priority:document.getElementById('ann-priority').value});
    Utils.showToast('Posted!','success');
    document.getElementById('ann-title').value='';document.getElementById('ann-body').value='';
    Views.renderAdminAnnounce();
  },

  renderAdminData() {
    return `<div class="feed-card" style="margin:8px 16px;">
      <div class="card-title">${Utils.svg('import')} Import Members</div>
      <p class="text-secondary text-sm mb-16">Upload a JSON file containing member data.</p>
      <input type="file" accept=".json" onchange="Views.handleImport(event)">
    </div>`;
  },

  handleImport(e) {
    const file=e.target.files[0]; if(!file)return;
    const r=new FileReader(); r.onload=(ev)=>Data.importMembersFromJSON(ev.target.result); r.readAsText(file);
  },

  renderAdminBackup() {
    return `<div class="feed-card" style="margin:8px 16px;">
      <div class="card-title">${Utils.svg('download')} Backup</div>
      <p class="text-secondary text-sm mb-16">Download all data as JSON.</p>
      <button class="x-btn x-btn-primary" onclick="Views.exportBackup()">${Utils.svg('download')} Download</button>
    </div>
    <div class="feed-card" style="margin:8px 16px;">
      <div class="card-title">${Utils.svg('import')} Restore</div>
      <p class="text-secondary text-sm mb-16">Restore from a backup file.</p>
      <input type="file" accept=".json" onchange="Views.importBackup(event)">
    </div>`;
  },

  exportBackup() {
    const data=Data.exportLocalData();
    const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob);
    const a=document.createElement('a');a.href=url;a.download='manifest-backup-'+Utils.todayStr()+'.json';a.click();URL.revokeObjectURL(url);
    Utils.showToast('Backup downloaded','success');
  },

  importBackup(e) {
    const file=e.target.files[0];if(!file)return;
    const r=new FileReader();r.onload=(ev)=>{Data.importLocalData(ev.target.result);Data.loadLocalData();};r.readAsText(file);
  },

  /* MODAL SYSTEM */
  showModal(type) {
    const ov=document.getElementById('modal-overlay'), body=document.getElementById('modal-body'),
      title=document.getElementById('modal-title'), actions=document.getElementById('modal-actions');
    ov.classList.add('active');

    if(type==='add-firsttimer') {
      const mins=Data.getMembers().filter(m=>m.role==='minister'||m.role==='leader');
      title.textContent='Add First-Timer';
      body.innerHTML=`
        <div class="x-field"><label>Name *</label><input id="ft-name" placeholder="Full name"></div>
        <div class="x-field"><label>Phone *</label><input id="ft-phone" placeholder="Phone number"></div>
        <div class="x-field"><label>Email</label><input id="ft-email" placeholder="Email" type="email"></div>
        <div class="x-field"><label>First Visit</label><input id="ft-date" type="date" value="${Utils.todayStr()}"></div>
        <div class="x-field"><label>How heard</label><select id="ft-how"><option value="">Select...</option><option>Friend</option><option>Street preaching</option><option>Outreach</option><option>Social media</option><option>Campus event</option><option>Other</option></select></div>
        <div class="x-field"><label>Assign to</label><select id="ft-assign"><option value="">Unassigned</option>${mins.map(m=>`<option value="${m.id}">${m.name}</option>`).join('')}</select></div>
        <div class="x-field"><label>Notes</label><textarea id="ft-notes" rows="2"></textarea></div>`;
      actions.innerHTML=`<button class="x-btn x-btn-secondary" onclick="Views.closeModal()">Cancel</button><button class="x-btn x-btn-primary" onclick="Views.saveFirstTimer()">Save</button>`;
    }
    else if(type==='assign') {
      const mins=Data.getMembers().filter(m=>m.role==='minister'||m.role==='leader');
      const cons=Data.getMembers().filter(m=>m.role==='member'||m.status==='first-timer'||m.status==='follow-up');
      title.textContent='Assign Contact';
      body.innerHTML=`
        <div class="x-field"><label>Minister</label><select id="assign-min">${mins.map(m=>`<option value="${m.id}">${m.name}</option>`).join('')}</select></div>
        <div class="x-field"><label>Contact</label><select id="assign-contact">${cons.map(c=>`<option value="${c.id}">${c.name}</option>`).join('')}</select></div>
        <div class="x-field"><label>Notes</label><textarea id="assign-notes" rows="2"></textarea></div>`;
      actions.innerHTML=`<button class="x-btn x-btn-secondary" onclick="Views.closeModal()">Cancel</button><button class="x-btn x-btn-primary" onclick="Views.saveAssignment()">Assign</button>`;
    }
    else if(type==='add-soul') {
      const mins=Data.getMembers().filter(m=>m.role!=='member');
      title.textContent='Record Soul Won';
      body.innerHTML=`
        <div class="x-field"><label>Name *</label><input id="sw-name" placeholder="Full name"></div>
        <div class="x-field"><label>Phone *</label><input id="sw-phone" placeholder="Phone number"></div>
        <div class="x-field"><label>Date</label><input id="sw-date" type="date" value="${Utils.todayStr()}"></div>
        <div class="x-field"><label>Context</label><select id="sw-context"><option value="outreach">Outreach</option><option value="street-preaching">Street Preaching</option><option value="service">Service</option><option value="other">Other</option></select></div>
        <div class="x-field"><label>Won By</label><select id="sw-wonby">${mins.map(m=>`<option value="${m.id}">${m.name}</option>`).join('')}</select></div>
        <div class="x-field"><label>Location</label><input id="sw-location" placeholder="Area"></div>
        <div class="x-field"><label>Notes</label><textarea id="sw-notes" rows="2"></textarea></div>`;
      actions.innerHTML=`<button class="x-btn x-btn-secondary" onclick="Views.closeModal()">Cancel</button><button class="x-btn x-btn-primary" onclick="Views.saveSoul()">Save</button>`;
    }
  },

  closeModal() { document.getElementById('modal-overlay').classList.remove('active'); },

  saveFirstTimer() {
    const n=document.getElementById('ft-name').value.trim(), p=document.getElementById('ft-phone').value.trim();
    if(!n||!p){Utils.showToast('Name and phone required','warning');return}
    const ft=Data.getFirstTimers();
    ft.firstTimers.push({id:Utils.id(),name:n,phone:p,email:document.getElementById('ft-email').value.trim(),firstVisitDate:document.getElementById('ft-date').value||Utils.todayStr(),howHeard:document.getElementById('ft-how').value,assignedTo:document.getElementById('ft-assign').value||null,followUpStatus:'pending',notes:document.getElementById('ft-notes').value.trim()});
    Data.saveFirstTimers(ft); Views.closeModal(); Utils.showToast('First-timer added','success');
    Views.switchFUTab('firsttimers',document.querySelector('.x-tab:nth-child(2)'));
  },

  saveAssignment() {
    const min=document.getElementById('assign-min').value, con=document.getElementById('assign-contact').value;
    if(!min||!con){Utils.showToast('Select both','warning');return}
    const fu=Data.getFollowUp();
    if(fu.assignments.some(a=>a.ministerId===min&&a.contactId===con)){Utils.showToast('Already exists','warning');return}
    fu.assignments.push({id:Utils.id(),ministerId:min,contactId:con,assignedDate:Utils.todayStr(),status:'pending',lastContactDate:null,notes:document.getElementById('assign-notes').value.trim()});
    Data.saveFollowUp(fu); Views.closeModal(); Utils.showToast('Assigned','success');
    Views.renderFUManage();
  },

  saveSoul() {
    const n=document.getElementById('sw-name').value.trim(), p=document.getElementById('sw-phone').value.trim();
    if(!n||!p){Utils.showToast('Name and phone required','warning');return}
    const s=Data.getSoulsWon();
    s.soulsWon.push({id:Utils.id(),name:n,phone:p,dateWon:document.getElementById('sw-date').value||Utils.todayStr(),context:document.getElementById('sw-context').value,wonBy:document.getElementById('sw-wonby').value,location:document.getElementById('sw-location').value.trim(),notes:document.getElementById('sw-notes').value.trim()});
    Data.saveSoulsWon(s); Views.closeModal(); Utils.showToast('Soul won!','success'); Views.soulsWon();
  },

  /* MORE PAGE */
  more() {
    const l=`<div class="section">
      <div class="section-body">
        <div class="member-row" onclick="Router.navigate('soulswon')" style="cursor:pointer;"><div class="member-avatar" style="background:var(--accent-green);">${Utils.svg('souls')}</div><div class="member-info"><div class="member-name">Souls Won</div><div class="member-detail">Current semester</div></div></div>
        <div class="member-row" onclick="Router.navigate('notifications')" style="cursor:pointer;"><div class="member-avatar" style="background:var(--accent-blue);">${Utils.svg('bell')}</div><div class="member-info"><div class="member-name">Notifications & Events</div><div class="member-detail">Schedule and reminders</div></div></div>
        ${Auth.hasRole(['admin','leader'])?`<div class="member-row" onclick="Router.navigate('admin')" style="cursor:pointer;"><div class="member-avatar" style="background:var(--text-secondary);">${Utils.svg('settings')}</div><div class="member-info"><div class="member-name">Admin Panel</div><div class="member-detail">Announcements, data, backup</div></div></div>`:''}
        <div class="member-row" onclick="Auth.logout()" style="cursor:pointer;"><div class="member-avatar" style="background:var(--accent-red);">${Utils.svg('logout')}</div><div class="member-info"><div class="member-name" style="color:var(--accent-red);">Sign Out</div><div class="member-detail">${STATE.user?.displayName||'User'}</div></div></div>
      </div>
    </div>`;
    document.getElementById('page-content').innerHTML=l;
  },
};

/* ─── INIT ─── */
document.addEventListener('DOMContentLoaded', async () => {
  await Data.loadAll();
  if (!Auth.checkSession()) {
    document.getElementById('login-screen').classList.add('active');
  }

  document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn=document.getElementById('login-btn'); btn.disabled=true; btn.textContent='Signing in...';
    const u=document.getElementById('username').value.trim(), p=document.getElementById('password').value;
    await Auth.login(u,p);
    btn.disabled=false; btn.textContent='Sign in';
    if (STATE.user) Router.navigate('dashboard');
  });

  document.querySelectorAll('.tab-item[data-tab]').forEach(t => {
    t.addEventListener('click', () => {
      const tab=t.dataset.tab;
      if(tab==='more') Router.navigate('more');
      else Router.navigate(tab);
    });
  });

  document.getElementById('modal-overlay').addEventListener('click', (e) => {
    if(e.target===document.getElementById('modal-overlay')) Views.closeModal();
  });

  if (STATE.user) Router.navigate('dashboard');

  // Notifications engine
  Notifications.init();
});

/* ─── NOTIFICATIONS ─── */
const Notifications = {
  init() {
    this.check();
    setInterval(()=>this.check(),60000);
  },
  check() {
    if(!('Notification'in window)||Notification.permission!=='granted')return;
    const now=new Date(), today=now.toISOString().split('T')[0], tName=Utils.dayName(today);
    const tomorrow=new Date(now); tomorrow.setDate(now.getDate()+1);
    const tomName=Utils.dayName(tomorrow.toISOString().split('T')[0]);
    const events=Data.getEvents();
    events.forEach(e=>{
      if(e.day===tName&&e.reminderDays.includes(0)){
        const[eh,em]=e.time.split(':').map(Number), et=eh*60+em, ct=now.getHours()*60+now.getMinutes();
        if(ct<et&&ct>=et-60) new Notification('Manifest Fellowship UCU',{body:e.name+' today at '+e.time,icon:'assets/logo.jpeg',tag:e.name+today});
      }
      if(e.day===tomName&&e.reminderDays.includes(1))
        new Notification('Manifest Fellowship UCU',{body:e.name+' tomorrow ('+e.day+') at '+e.time,icon:'assets/logo.jpeg',tag:e.name+today});
    });
  }
};

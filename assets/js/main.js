let eventsData = [
  {
    id: 1,
    title: "ملتقى التوظيف الافتراضي",
    date: "2026-06-10",
    category: "وظائف",
    city: "دمشق",
    image: "job-fair.jpg",
    featured: true,
    description:
      "فرصتك الذهبية للقاء كبرى الشركات التقنية والهندسية في سوريا والوطن العربي. جلسات تدريبية مباشرة، وورش عمل لكتابة السيرة الذاتية، ومقابلات توظيف فورية مع نخبة من مسؤولي التوظيف. لا تفوّت فرصة بناء مستقبلك المهني!",
    location: "قاعة المؤتمرات - دمشق",
    mapImage: "map.jpg",
  },
  {
    id: 2,
    title: "مؤتمر الذكاء الاصطناعي",
    date: "2026-05-20",
    category: "تكنولوجيا",
    city: "حلب",
    image: "ai-conf.webp",
    featured: true,
    description:
      "انضم إلى أبرز خبراء الذكاء الاصطناعي في المنطقة لاكتشاف أحدث تطبيقات التعلم الآلي والتعلم العميق في مجال التعليم. سنناقش مستقبل التعليم التفاعلي، أدوات الذكاء الاصطناعي التوليدي، وكيف يمكن للتقنيات الحديثة أن تحدث ثورة في طرق التدريس والتعلم. جلسات نقاشية حية وتجارب عملية.",
    location: "مركز الابتكار - حلب",
    mapImage: "map.jpg",
  },
  {
    id: 3,
    title: "ندوة تطوير الذات",
    date: "2026-05-05",
    category: "تطوير",
    city: "اللاذقية",
    image: "self-dev.jpg",
    featured: false,
    description:
      "طور مهاراتك القيادية والتواصلية في هذه الندوة التفاعلية الملهمة. سنتناول استراتيجيات بناء الشخصية المؤثرة، فن الإلقاء والتحدث أمام الجمهور، وكيفية إدارة الوقت وزيادة الإنتاجية الشخصية. جلسات تدريبية عملية مع مدربين معتمدين ستغير نظرتك نحو ذاتك وقدراتك.",
    location: "فندق الشرق - اللاذقية",
    mapImage: "map.jpg",
  },
  {
    id: 4,
    title: "هاكاثون البرمجة",
    date: "2026-07-15",
    category: "تكنولوجيا",
    city: "دمشق",
    image: "hack.jpg",
    featured: true,
    description:
      "تحدٍّ برمجي مثير يستمر 48 ساعة متواصلة! شارك ضمن فرق لحل مشاكل تقنية واقعية وابتكار تطبيقات وحلول ذكية. جوائز قيمة للمراكز الثلاثة الأولى، بالإضافة إلى فرص تدريبية في كبرى شركات التكنولوجيا. سيكون معك موجهون وخبراء طوال فترة الهاكاثون لمساعدتك. سجل الآن وأطلق العنان لإبداعك البرمجي!",
    location: "جامعة دمشق الافتراضية",
    mapImage: "map.jpg",
  },
  {
    id: 5,
    title: "مهرجان الموسيقى الكلاسيكية",
    date: "2026-08-20",
    category: "موسيقى",
    city: "دمشق",
    image: "music.jpg",
    featured: false,
    description:
      "استمتع بأمسية موسيقية ساحرة مع أشهر المقطوعات الكلاسيكية العالمية. يحيي الحفل أوركسترا الوطنية السورية بقيادة المايسترو العالمي.",
    location: "دار الأوبرا - دمشق",
    mapImage: "map.jpg",
  },
  {
    id: 6,
    title: "معرض الفنون التشكيلية",
    date: "2026-09-05",
    category: "ثقافة",
    city: "حمص",
    image: "art.jpg",
    featured: false,
    description:
      "معرض يضم أكثر من 100 لوحة فنية لأشهر الفنانين التشكيليين السوريين. فرصة لاكتشاف المواهب الشابة وشراء الأعمال الفنية.",
    location: "مركز حمص الثقافي",
    mapImage: "map.jpg",
  },
  {
    id: 7,
    title: "بطولة كرة القدم الخماسية",
    date: "2026-09-15",
    category: "رياضة",
    city: "اللاذقية",
    image: "sports.jpg",
    featured: true,
    description:
      "بطولة رياضية تجمع فرق طلاب الجامعة في منافسة حماسية. جوائز قيمة للفرق الفائزة بالإضافة إلى كأس البطولة.",
    location: "الملعب الأولمبي - اللاذقية",
    mapImage: "map.jpg",
  },
  {
    id: 8,
    title: "يوم العائلة الترفيهي",
    date: "2026-10-01",
    category: "عائلي",
    city: "طرطوس",
    image: "family.jpg",
    featured: false,
    description:
      "فعالية مخصصة للعائلات تضم ألعاباً ترفيهية، مسابقات، وورش عمل للأطفال. يوم مليء بالمرح والمفاجآت لجميع أفراد العائلة.",
    location: "منتزه طرطوس",
    mapImage: "map.jpg",
  },
];

//show date in arabic
function formatDate(dateStr) {
  let d = new Date(dateStr);
  return d.toLocaleDateString("ar-EG");
}

//load slider and latest 3 events for home page
function loadSliderAndLatestEvents() {
  let featured = eventsData.filter((e) => e.featured);
  let indicators = "",
    items = "";
  featured.forEach((e, idx) => {
    indicators += `<button type="button" data-bs-target="#eventsCarousel" data-bs-slide-to="${idx}" ${idx === 0 ? 'class="active"' : ""}></button>`;
    items += `<div class="carousel-item ${idx === 0 ? "active" : ""}">
                    <img src="assets/img/events/${e.image}" class="d-block w-100" alt="${e.title}">
                    <div class="carousel-caption d-none d-md-block"><h3>${e.title}</h3><p>${e.date}</p></div>
                  </div>`;
  });
  $("#sliderIndicators").html(indicators);
  $("#sliderItems").html(items);

  let latest = [...eventsData]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);
  let html = "";
  latest.forEach((e) => {
    html += `<div class="col-md-4"><div class="card event-card h-100"><img src="assets/img/events/${e.image}" class="card-img-top"><div class="card-body"><h5>${e.title}</h5><p class="text-muted">${formatDate(e.date)}</p><a href="event.html?id=${e.id}" class="btn btn-primary btn-sm">تفاصيل</a></div></div></div>`;
  });
  $("#latestEventsGrid").html(html);
}

// load category badges
function loadCategories() {
  let cats = [...new Set(eventsData.map((e) => e.category))];
  let badges = "";
  cats.forEach((c) => {
    badges += `<span class="badge-category" data-cat="${c}">${c}</span>`;
  });
  $("#categoriesBadges").html(badges);
  $(".badge-category").click(function () {
    window.location.href = `events.html?cat=${$(this).data("cat")}`;
  });
}

//for events page - load everything
function loadAllEventsPage() {
  let params = new URLSearchParams(window.location.search);
  let filterCat = params.get("cat") || "";
  renderEventsGrid(filterCat, "", "");
  populateFilters();
  $("#applyFiltersBtn").click(() => {
    let cat = $("#filterCategory").val();
    let date = $("#filterDate").val();
    let city = $("#filterCity").val();
    renderEventsGrid(cat, date, city);
  });
}

//show events in grid
function renderEventsGrid(cat, date, city) {
  let filtered = eventsData.filter(
    (e) =>
      (!cat || e.category === cat) &&
      (!date || e.date === date) &&
      (!city || e.city === city),
  );
  let html = "";
  filtered.forEach((e) => {
    html += `<div class="col-md-6 col-lg-4"><div class="card event-card h-100"><img src="assets/img/events/${e.image}" class="card-img-top"><div class="card-body"><h5>${e.title}</h5><p><i class="fas fa-calendar"></i> ${formatDate(e.date)}</p><p><i class="fas fa-map-marker-alt"></i> ${e.city}</p><span class="badge bg-secondary">${e.category}</span><p class="mt-2">${e.description.substring(0, 60)}...</p><a href="event.html?id=${e.id}" class="btn btn-primary mt-2">التفاصيل</a></div></div></div>`;
  });
  $("#allEventsGrid").html(
    html || '<div class="col-12 text-center">لا توجد فعاليات</div>',
  );
}

//fill filter dropdowns
function populateFilters() {
  let cats = [...new Set(eventsData.map((e) => e.category))];
  let catOptions = '<option value="">جميع التصنيفات</option>';
  cats.forEach((c) => {
    catOptions += `<option value="${c}">${c}</option>`;
  });
  $("#filterCategory").html(catOptions);

  let cities = [...new Set(eventsData.map((e) => e.city))];
  let cityOptions = '<option value="">جميع المدن</option>';
  cities.forEach((c) => {
    cityOptions += `<option value="${c}">${c}</option>`;
  });
  $("#filterCity").html(cityOptions);
}

//show single event details
function loadEventDetails() {
  let id = new URLSearchParams(window.location.search).get("id");
  let event = eventsData.find((e) => e.id == id);

  if (!event) {
    $("#eventDetailContainer").html(
      '<div class="text-center py-5"><i class="fas fa-exclamation-circle fa-3x text-warning mb-3"></i><h3>فعالية غير موجودة</h3><a href="events.html" class="btn btn-primary mt-3">العودة إلى الفعاليات</a></div>',
    );
    return;
  }

  let mapImageHtml = `
    <div class="event-location-map mt-4">
        <h5><i class="fas fa-map-marked-alt text-gold"></i> موقع الفعالية على الخريطة</h5>
        <img src="assets/img/events/${event.mapImage}" class="img-fluid rounded border mt-2" alt="خريطة موقع الفعالية" style="width: 100%; max-height: 300px; object-fit: cover;">
    </div>
  `;

  let html = `
        <div class="event-detail-card card">
            <img src="assets/img/events/${event.image}" class="event-detail-img" alt="${event.title}">
            <div class="card-body p-4">
                <h2 class="card-title mb-3">${event.title}</h2>
                
                <div class="event-info-row">
                    <div class="event-info-item">
                        <i class="fas fa-calendar-alt"></i>
                        <strong>التاريخ</strong>
                        <span class="d-block">${formatDate(event.date)}</span>
                    </div>
                    <div class="event-info-item">
                        <i class="fas fa-tag"></i>
                        <strong>التصنيف</strong>
                        <span class="d-block">${event.category}</span>
                    </div>
                    <div class="event-info-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <strong>الموقع</strong>
                        <span class="d-block">${event.location} - ${event.city}</span>
                    </div>
                </div>
                
                <div class="event-description mt-4">
                    <h5><i class="fas fa-info-circle text-gold"></i> عن الفعالية</h5>
                    <p>${event.description}</p>
                </div>
                
                ${mapImageHtml}
                
                <div class="action-buttons">
                    <button class="btn btn-primary" onclick="alert('✓ تمت إضافة الفعالية إلى تقويمك بنجاح')">
                        <i class="fas fa-calendar-plus"></i> أضف إلى التقويم
                    </button>
                    <button class="btn-outline-gold" onclick="alert('✓ تم نسخ رابط المشاركة')">
                        <i class="fas fa-share-alt"></i> مشاركة
                    </button>
                </div>
            </div>
        </div>
        
        <div class="related-events-section">
            <h4 class="text-center mb-4"><i class="fas fa-star text-gold"></i> فعاليات ذات صلة</h4>
            <div class="row g-4" id="relatedEventsGrid"></div>
        </div>
    `;

  $("#eventDetailContainer").html(html);

  //show 3 similar events (same category or city)
  let related = eventsData
    .filter(
      (e) =>
        e.id != id && (e.category === event.category || e.city === event.city),
    )
    .slice(0, 3);
  let relatedHtml = "";

  if (related.length > 0) {
    related.forEach((e) => {
      relatedHtml += `
                <div class="col-md-4 col-sm-6">
                    <div class="card related-card h-100">
                        <img src="assets/img/events/${e.image}" class="related-img" alt="${e.title}">
                        <div class="card-body p-3">
                            <h6 class="card-title">${e.title}</h6>
                            <small class="text-muted"><i class="fas fa-calendar"></i> ${formatDate(e.date)}</small>
                            <a href="event.html?id=${e.id}" class="btn btn-sm btn-primary mt-2 w-100">عرض التفاصيل</a>
                        </div>
                    </div>
                </div>
            `;
    });
  } else {
    relatedHtml =
      '<div class="col-12 text-center text-muted">لا توجد فعاليات ذات صلة</div>';
  }

  $("#relatedEventsGrid").html(relatedHtml);
}

//check contact form before sending
function initContactForm() {
  $("#contactForm").submit(function (e) {
    e.preventDefault();
    let name = $("#contactName").val().trim();
    let email = $("#contactEmail").val().trim();
    let msg = $("#contactMessage").val().trim();
    let alertDiv = $("#formAlert");
    if (!name || !email || !msg || !email.includes("@")) {
      alertDiv
        .removeClass("d-none alert-success")
        .addClass("alert-danger")
        .text("يرجى تعبئة جميع الحقول بشكل صحيح.");
    } else {
      alertDiv
        .removeClass("d-none alert-danger")
        .addClass("alert-success")
        .text("تم إرسال رسالتك بنجاح!");
      this.reset();
      setTimeout(() => alertDiv.addClass("d-none"), 3000);
    }
  });
}

document.addEventListener('click', function(event) {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const toggler = document.querySelector('.navbar-toggler');
    
    if (navbarCollapse && navbarCollapse.classList.contains('show') && window.innerWidth < 992) {
        if (!toggler.contains(event.target) && !navbarCollapse.contains(event.target)) {
            toggler.click();
        }
    }
});

document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 992) {
            document.querySelector('.navbar-toggler').click();
        }
    });
});
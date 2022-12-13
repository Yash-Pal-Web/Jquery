
/**
* Template Name: NiceAdmin - v2.4.1
* Template URL: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    if (all) {
      select(el, all).forEach(e => e.addEventListener(type, listener))
    } else {
      select(el, all).addEventListener(type, listener)
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Sidebar toggle
   */
  if (select('.toggle-sidebar-btn')) {
    on('click', '.toggle-sidebar-btn', function(e) {
      select('body').classList.toggle('toggle-sidebar')
    })
  }

  /**
   * Search bar toggle
   */
  if (select('.search-bar-toggle')) {
    on('click', '.search-bar-toggle', function(e) {
      select('.search-bar').classList.toggle('search-bar-show')
    })
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Initiate tooltips
   */
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })

  /**
   * Initiate quill editors
   */
  if (select('.quill-editor-default')) {
    new Quill('.quill-editor-default', {
      theme: 'snow'
    });
  }

  if (select('.quill-editor-bubble')) {
    new Quill('.quill-editor-bubble', {
      theme: 'bubble'
    });
  }

  if (select('.quill-editor-full')) {
    new Quill(".quill-editor-full", {
      modules: {
        toolbar: [
          [{
            font: []
          }, {
            size: []
          }],
          ["bold", "italic", "underline", "strike"],
          [{
              color: []
            },
            {
              background: []
            }
          ],
          [{
              script: "super"
            },
            {
              script: "sub"
            }
          ],
          [{
              list: "ordered"
            },
            {
              list: "bullet"
            },
            {
              indent: "-1"
            },
            {
              indent: "+1"
            }
          ],
          ["direction", {
            align: []
          }],
          ["link", "image", "video"],
          ["clean"]
        ]
      },
      theme: "snow"
    });
  }

  /**
   * Initiate TinyMCE Editor
   */
  const useDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isSmallScreen = window.matchMedia('(max-width: 1023.5px)').matches;

  tinymce.init({
    selector: 'textarea.tinymce-editor',
    plugins: 'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons',
    editimage_cors_hosts: ['picsum.photos'],
    menubar: 'file edit view insert format tools table help',
    toolbar: 'undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
    toolbar_sticky: true,
    toolbar_sticky_offset: isSmallScreen ? 102 : 108,
    autosave_ask_before_unload: true,
    autosave_interval: '30s',
    autosave_prefix: '{path}{query}-{id}-',
    autosave_restore_when_empty: false,
    autosave_retention: '2m',
    image_advtab: true,
    link_list: [{
        title: 'My page 1',
        value: 'https://www.tiny.cloud'
      },
      {
        title: 'My page 2',
        value: 'http://www.moxiecode.com'
      }
    ],
    image_list: [{
        title: 'My page 1',
        value: 'https://www.tiny.cloud'
      },
      {
        title: 'My page 2',
        value: 'http://www.moxiecode.com'
      }
    ],
    image_class_list: [{
        title: 'None',
        value: ''
      },
      {
        title: 'Some class',
        value: 'class-name'
      }
    ],
    importcss_append: true,
    file_picker_callback: (callback, value, meta) => {
      /* Provide file and text for the link dialog */
      if (meta.filetype === 'file') {
        callback('https://www.google.com/logos/google.jpg', {
          text: 'My text'
        });
      }

      /* Provide image and alt text for the image dialog */
      if (meta.filetype === 'image') {
        callback('https://www.google.com/logos/google.jpg', {
          alt: 'My alt text'
        });
      }

      /* Provide alternative source and posted for the media dialog */
      if (meta.filetype === 'media') {
        callback('movie.mp4', {
          source2: 'alt.ogg',
          poster: 'https://www.google.com/logos/google.jpg'
        });
      }
    },
    templates: [{
        title: 'New Table',
        description: 'creates a new table',
        content: '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>'
      },
      {
        title: 'Starting my story',
        description: 'A cure for writers block',
        content: 'Once upon a time...'
      },
      {
        title: 'New list with dates',
        description: 'New List with dates',
        content: '<div class="mceTmpl"><span class="cdate">cdate</span><br><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>'
      }
    ],
    template_cdate_format: '[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]',
    template_mdate_format: '[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]',
    height: 600,
    image_caption: true,
    quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
    noneditable_class: 'mceNonEditable',
    toolbar_mode: 'sliding',
    contextmenu: 'link image table',
    skin: useDarkMode ? 'oxide-dark' : 'oxide',
    content_css: useDarkMode ? 'dark' : 'default',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
  });

  /**
   * Initiate Bootstrap validation check
   */
  var needsValidation = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(needsValidation)
    .forEach(function(form) {
      form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })

  /**
   * Initiate Datatables
   */
  const datatables = select('.datatable', true)
  datatables.forEach(datatable => {
    new simpleDatatables.DataTable(datatable);
  })

  /**
   * Autoresize echart charts
   */
  const mainContainer = select('#main');
  if (mainContainer) {
    setTimeout(() => {
      new ResizeObserver(function() {
        select('.echart', true).forEach(getEchart => {
          echarts.getInstanceByDom(getEchart).resize();
        })
      }).observe(mainContainer);
    }, 200);
  }

})();

// /* Step Form JS */

// $(document).ready(function(){
    
//   var current_fs, next_fs, previous_fs; //fieldsets
//   var opacity;
  
//   $(".next").click(function(){
      
//       current_fs = $(this).closest('.loginPrevbtn').parent();
//       next_fs = $(this).closest('.loginPrevbtn').parent().next();
      
//       //Add Class Active
//       $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
      
//       //show the next fieldset
//       next_fs.show(); 
//       //hide the current fieldset with style
//       current_fs.animate({opacity: 0}, {
//           step: function(now) {
//               // for making fielset appear animation
//               opacity = 1 - now;
  
//               current_fs.css({
//                   'display': 'none',
//                   'position': 'relative'
//               });
//               next_fs.css({'opacity': opacity});
//           }, 
//           duration: 600
//       });
//   });
  
//   $(".previous").click(function(){
      
//       current_fs = $(this).closest('.loginPrevbtn').parent();
//       previous_fs = $(this).closest('.loginPrevbtn').parent().prev();
      
//       //Remove class active
//       $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
      
//       //show the previous fieldset
//       previous_fs.show();
  
//       //hide the current fieldset with style
//       current_fs.animate({opacity: 0}, {
//           step: function(now) {
//               // for making fielset appear animation
//               opacity = 1 - now;
  
//               current_fs.css({ 
//                   'display': 'none',
//                   'position': 'relative'
//               });
//               previous_fs.css({'opacity': opacity});
//           }, 
//           duration: 600
//       });
//   });
  
//   $('.radio-group .radio').click(function(){
//       $(this).parent().find('.radio').removeClass('selected');
//       $(this).addClass('selected');
//   });
  
//   $(".submit").click(function(){
//       return false;
//   })
      
//   });
  
//   var loadFile = function (event) {
//     var image = document.getElementById("output");
//     image.src = URL.createObjectURL(event.target.files[0]);
//   };

  
  // $(document).ready(function(){
  //   $(".tableSearchBar input").keypress(function(){
  //     if($('.tableSearchBar input').val().length > 0){
  //       $('.tableSearchBar').addClass('neOne');
  //     } else {
  //       $('.tableSearchBar').removeClass('neOne');
  //     }
  //   });
  // });

//   $(document).ready(function() { 


//   $("#sidebar-nav li").on("click", function() {
//     $("#sidebar-nav li.active").removeClass("active");
//     $(this).addClass("active");
//     console.log('sf');
// });
//   });

//   $(document).ready(function() { 

  $(document).ready(function() { 
  $(".filIcon ").on("click", function() {
    $(this).closest('.pagetitle').find('.filterBlock').slideToggle();
});

$(".singleStops").on("click", function() {
  $(this).closest('.stopsDir').addClass('DetailPopup');
});

$("#closeDetailPopup").on("click", function() {
  $('.stopsDir').removeClass('DetailPopup');
});
$(".progress").each(function(){
  
  var $bar = $(this).find(".bar");
  var $val = $(this).find("span");
  var perc = parseInt( $val.text(), 10);

  $({p:0}).animate({p:perc}, {
    duration: 3000,
    easing: "swing",
    step: function(p) {
      $bar.css({
        transform: "rotate("+ (45+(p*1.8)) +"deg)", // 100%=180° so: ° = % * 1.8
        // 45 is to add the needed rotation to have the green borders at the bottom
      });
      $val.text(p|0);
    }
  });
});

  });
  


// var btnContainer = document.getElementById("#sidebar-nav");

// var btns = btnContainer.getElementsByClassName(".nav-item");

// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }

$(document).ready(function () {
  $('#dtBasicExample').DataTable();
  $('.dataTables_length').addClass('bs-select');

});
$('.pymntMethod ul li').on('click', function(){
  $('.pymntMethod ul li').removeClass('activeMethod')
    $(this).addClass('activeMethod');
})
$('.dropdown').on('click', function(event){
  event.stopPropagation();
});

$('#showDriverDashboard').on('click', function(event){
  $('body').addClass('driversDashboard')
});/* Charts.js */
aDatasets1 = [0,4,0,50];  
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Finished", "Failed", "Misload", "No Location"],       
        
        datasets: [ {
              label: 'Result',
              fill:false,
            data: aDatasets1,
            backgroundColor: '#E91E63',
            barThickness: 10,  
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
            ],
            borderWidth: 1,
        }
        ]
    },
    options: {
        scales: {
          xAxes: [{
            barThickness: 2,
            maxBarThickness: 2,
        }]
        },

        responsive: true,
        chartArea: {
          backgroundColor: 'rgba(251, 85, 85, 0.4)'
      },
        plugins: {
          legend: {
            display: false
          }
        },
        
       tooltips: {
            callbacks: {
                labelColor: function(tooltipItem, chart) {
                    return {
                        borderColor: 'rgb(255, 0, 20)',
                        backgroundColor: 'rgb(255,20, 0)'
                    }
                }
            }
        },
    }
});



aDatasets1 = [26,28,0,39, 26,28,0,39];  
var ctx = document.getElementById("hourlyDel");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["09", "09", "10", "11", "12", "13", "14", "15"],       
        
        datasets: [ {
              label: 'Result',
              fill:false,
            data: aDatasets1,
            backgroundColor: '#E91E63',
            barThickness: 20,  
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
            ],
            borderWidth: 1,
        }
        ]
    },
    options: {
        scales: {
          xAxes: [{
            barThickness: 5,
            maxBarThickness: 5,
        }]
        },

        responsive: true,
        chartArea: {
          backgroundColor: 'rgba(251, 85, 85, 0.4)'
      },
        plugins: {
          legend: {
            display: false
          }
        },
        
       tooltips: {
            callbacks: {
                labelColor: function(tooltipItem, chart) {
                    return {
                        borderColor: 'rgb(255, 0, 20)',
                        backgroundColor: 'rgb(255,20, 0)'
                    }
                }
            }
        },
    }
});




aDatasets1 = [0,4,0,50, 0,4,0,50];  
var ctx = document.getElementById("hourlyPic");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["09", "09", "10", "11", "12", "13", "14", "15"],      
        
        datasets: [ {
              label: 'Result',
              fill:false,
            data: aDatasets1,
            backgroundColor: '#E91E63',
            barThickness: 10,  
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
            ],
            borderWidth: 1,
        }
        ]
    },
    options: {
        scales: {
          xAxes: [{
            barThickness: 2,
            maxBarThickness: 2,
        }]
        },

        responsive: true,
        chartArea: {
          backgroundColor: 'rgba(251, 85, 85, 0.4)'
      },
        plugins: {
          legend: {
            display: false
          }
        },
        
       tooltips: {
            callbacks: {
                labelColor: function(tooltipItem, chart) {
                    return {
                        borderColor: 'rgb(255, 0, 20)',
                        backgroundColor: 'rgb(255,20, 0)'
                    }
                }
            }
        },
    }
});

/* Chart.js Ends */

$(document).ready(function() {
  $('#example-getting-started').multiselect();
});
var expanded = false;

function showCheckboxes() {
  var checkboxess = document.getElementById("checkboxes").val;
console.log(checkboxess);
  var checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}

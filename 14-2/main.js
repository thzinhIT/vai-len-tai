var spidol = new Audio("spidol.mp3");
$(document).ready(function () {
  // process bar
  setTimeout(function () {
    firstQuestion();

    // spidol.play();
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "visible",
    });
  }, 600);
});

function init() {
  $("#title").text(CONFIG.title);
  $("#desc").text(CONFIG.desc);
  $("#yes").text(CONFIG.btnYes);
  $("#no").text(CONFIG.btnNo);
}

function firstQuestion() {
  var audioDoaMa = new Audio("makeu.mp3");
  var audioNo = new Audio("no.mp3");

  $(".content").hide();
  Swal.fire({
    title: "Bạn Yêu ơi!! 👋👋👋",
    text: "Chuẩn bị nhận quà chưa nè!! 🥰🥰<3",
    imageUrl: "cuteCat.jpg",
    background: '#fff url("iput-bg.jpg")',
    imageAlt: "Custom image",
    confirmButtonText: "Rồi ạ😍!",
  }).then((result) => {
    if (result.value) {
      spidol.play();
      var audio = new Audio("tick.mp3");
      audio.play();
      Swal.fire({
        title: "hello cô giáo<3😘 ",
        text: "Chúc cô giáo có 1 ngày valentine vui vẻ 😊, một mùa valentine thật đằm thắm,  cố gắng vượt qua khó khăn để cho tình yêu của cô giáo đẹp hơn nè !, vươn xa hơn và đi tới hạnh phúc, chúc em có một mùa Va lên thai vui vẻ🥰🥰🥰",
        imageUrl: "baner.jpg",
        background: '#fff url("iput-bg.jpg")',
        imageAlt: "Custom image",
        confirmButtonText: "Cảm ơn anh trò !😘",
      }).then((result) => {
        if (result.value) {
          var audio = new Audio("tick.mp3");
          audio.play();
          Swal.fire({
            title: "Có quà cho cô Phương nè!!🤩🤩🤩",
            text: `Ấn vào nút dưới đây để mở quà🤩`,
            imageUrl: "qua2.png",
            background: '#fff url("iput-bg.jpg")',
            imageAlt: "Custom image",
            confirmButtonText: "Mở🤩🤩🤩",
          }).then((result) => {
            if (result.value) {
              spidol.pause();
              audioNo.play();
              Swal.fire({
                text: `Bùm😲😲😲`,
                imageUrl: "No.gif",
                background: '#fff url("iput-bg.jpg")',
                imageAlt: "Custom image",
                confirmButtonText: "Ấn vào để xem quà🥳",
              }).then((result) => {
                audioNo.pause();
                if (result.value) {
                  spidol.pause();
                  audioDoaMa.play();
                  Swal.fire({
                    width: 5000,
                    title: `Bùm 😑😑😑`,
                    imageUrl: "doama2.jpg",
                    background: '#fff url("iput-bg.jpg")',
                    imageAlt: "Custom image",
                    confirmButtonText: "😑😑😑 <3",
                  }).then((result) => {
                    if (result.value) {
                      audioDoaMa.pause();
                      spidol.play();
                      Swal.fire({
                        width: 5000,
                        title: "Đùa đấy quà đây nè ^.^!!🤣🤣🤣",
                        imageUrl: "KitKat-socola-2F-17g.jpg",
                        background: '#fff url("iput-bg.jpg")',
                        imageAlt: "Custom image",
                        confirmButtonText:
                          "Xúc động quá, cảm ơn vì món quà nha  <3😭😭😭",
                      }).then((result) => {
                        if (result.value) {
                          var audio = new Audio("tick.mp3");
                          audio.play();
                          Swal.fire({
                            width: 900,
                            confirmButtonText: "Okiiiii lun <3😜😜😜",
                            background: '#fff url("iput-bg.jpg")',
                            title:
                              "Chúc bạn một mùa Valentine vui vẻ không quạo nha🥰😘😘",
                            text: "Ib mình nêu cảm nhận về món quà này nha! Hhee🥰🥰🥰",
                            confirmButtonColor: "#83d0c9",
                            backdrop: `
                                                    rgba(0,0,123,0.4)
                                                    url("giphy2.gif")
                                                    left top
                                                    no-repeat
                                                    `,
                            onClose: () => {
                              window.location = CONFIG.messLink;
                            },
                          });
                        }
                      });
                    }
                  });
                }
              });
            }
          });
        }
      });
    }
  });
}

// switch button position
function switchButton() {
  var audio = new Audio("duck.mp3");
  audio.play();
  var leftNo = $("#no").css("left");
  var topNO = $("#no").css("top");
  var leftY = $("#yes").css("left");
  var topY = $("#yes").css("top");
  $("#no").css("left", leftY);
  $("#no").css("top", topY);
  $("#yes").css("left", leftNo);
  $("#yes").css("top", topNO);
}
// move random button póition
function moveButton() {
  var audio = new Audio("Swish1.mp3");
  audio.play();
  var x = Math.random() * ($(window).width() - $("#no").width()) * 0.9;
  var y = Math.random() * ($(window).height() - $("#no").height()) * 0.9;
  var left = x + "px";
  var top = y + "px";
  $("#no").css("left", left);
  $("#no").css("top", top);
}

init();

var n = 0;
$("#no").mousemove(function () {
  if (n < 1) switchButton();
  if (n > 1) moveButton();
  n++;
});
$("#no").click(() => {
  if (screen.width >= 900) switchButton();
});

// generate text in input
function textGenerate() {
  var n = "";
  var text = " " + CONFIG.reply;
  var a = Array.from(text);
  var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
  var count = textVal.length;
  if (count > 0) {
    for (let i = 1; i <= count; i++) {
      n = n + a[i];
      if (i == text.length + 1) {
        $("#txtReason").val("");
        n = "";
        break;
      }
    }
  }
  $("#txtReason").val(n);
  setTimeout("textGenerate()", 1);
}

// show popup
$("#yes").click(function () {
  var audio = new Audio("tick.mp3");
  audio.play();
  Swal.fire({
    title: CONFIG.question,
    html: true,
    width: 900,
    padding: "3em",
    html: "<input type='text' class='form-control' id='txtReason' onmousemove=textGenerate()  placeholder='Whyyy'>",
    background: '#fff url("iput-bg.jpg")',
    backdrop: `
              rgba(0,0,123,0.4)
              url("giphy2.gif")
              left top
              no-repeat
            `,
    confirmButtonColor: "#3085d6",
    confirmButtonColor: "#fe8a71",
    confirmButtonText: CONFIG.btnReply,
  }).then((result) => {
    if (result.value) {
      Swal.fire({
        width: 900,
        confirmButtonText: CONFIG.btnAccept,
        background: '#fff url("iput-bg.jpg")',
        title: CONFIG.mess,
        text: CONFIG.messDesc,
        confirmButtonColor: "#83d0c9",
        onClose: () => {
          window.location = CONFIG.messLink;
        },
      });
    }
  });
});

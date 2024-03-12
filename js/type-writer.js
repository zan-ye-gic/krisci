const words = [
	"ကိုကို့ အမျိုးသမီးလေးရေ...",
	"အိန္ဒြာချမ်းမြေ့လေးရေ...",
	"ကိုတို့ ချစ်လာခဲ့တာ ၁နှစ် နဲ့ ၁၁လ ရှိခဲ့ပြီနော်...",
	"ဒီအထိရောက်လာခဲ့လိမ့်မယ်လို့",
	"ကိုတကယ် မထင်ခဲ့ဘူး...",
	"ဒီအထိကို ကြိုးစားပေးခဲ့တဲ့ ကလေးလေးကို",
	"ကို ကျေးဇူးအများကြီးတင်တယ်",
	"ကိုတို့တတွေ နောင်လာမယ့် နှစ်တွေကိုလည်း",
	"အတူတူ ရေတွက်သွားချင်တယ်...",
	"မိုင်ပေါင်း နှစ်ထောင်ကျော် အကွာကနေ",
	"တစ်ရက်မပြတ် သတိတရနဲ့",
	"အမြဲတမ်းလိုလို ရှိနေခဲ့လို့လည်း",
	"နေ့တိုင်းလိုလိုကို ပျော်ရတယ်...",
	"ဒီလူသားရဲ့ ဆူပူတာတွေ နားအညည်းခံပေးလို့လည်း",
	"သိပ်ကို မြတ်နိုးရတယ်",
	"နှစ်ယောက်စလုံး အကျင့်က ခက်ကောင်းကောင်းဆိုတော့",
	"သူတစ်ဖျံကိုယ်တစ်လှည့် နားလည်ပေးရတာလည်း",
	"ကို့ အတွက်တော့ ပျော်စရာတစ်မျိုးလိုဖြစ်နေပါပြီ",
	"ကဲပါ... ကိုပေးတဲ့ လက်ဆောင်လေးကို",
	"ကလိကြည့်လိုက်ပါဦး..."
];
let i = 0;
let typingTimer;
let skipText = document.getElementById("cute-pic");

skipText.onclick = () => {
	i = words.length;
	document.getElementById("pop-up-btn").style.display = "flex";
	document.getElementById("header-sub-title").style.display = "none";
};

function typingEffect() {
	let word = words[i].split("");
	var loopTyping = function () {
		if (word.length > 0) {
			document.getElementById('word').innerHTML += word.shift();
		} else {
			setTimeout(deletingEffect, 1000);
			return false;
		};
		typingTimer = setTimeout(loopTyping, 150);
	};
	loopTyping();
};

function deletingEffect() {
	let word = words[i].split("");
	var loopDeleting = function () {
		if (word.length > 0) {
			word.pop();
			document.getElementById('word').innerHTML = word.join("");
		} else {
			if (words.length > (i + 1)) {
				i++;
			} else {
				document.getElementById("pop-up-btn").style.display = "flex";
				document.getElementById("header-sub-title").style.display = "none";
			};
			typingEffect();
			return false;
		};
		typingTimer = setTimeout(loopDeleting, 50);
	};
	loopDeleting();
};

typingEffect();
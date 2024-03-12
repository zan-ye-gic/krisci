let iLang = document.getElementById("insert-lang")
const langs = [
    "မီးပြောပြမယ် မီးပြောပြမယ်<br>မီးပြောတာနားထောင်...😾",
    "မရဘူး...အိမ်သာသွားချင်လည်း<br>ဖုန်းယူသွားပြီးကင်မရာဖွင့်...😼",
    "ရေချိုးမယ်ဆိုပြီး မီးကိုမထားခဲ့ပါနဲ့<br>ဖုန်းယူသွားပြီးကင်ရာဖွင့်ပါ...😿",
    "ကိုကိုက မီးကို ဆူဖို့ချည်းပဲ...😫",
    "ကျောင်းက မီးကိုပြိုင်တဲ့ဟာမတွေကလေ<br>သိလား ကိုကို...😤",
    "ကျွန်မလှတာ ကျွန်မသိတယ်...😎",
    "ကိုကို ဒီဟာလေး လှတယ်နော်...<br>အဲ့တာလေး မီးအရမ်းကြိုက်တာ...💸",
    "ရှင် ကျွန်မ မဟုတ်တဲ့ မိန်းမနဲ့ယူရင်<br>!#@%=;$!+$@^*...🤬",
    "မီး မနက်ဖြန် အစောကြီး ထမှာ...😇",
    "ဒီလိုကောင်လေးမျိုးကိုရှာထားတာ ငါလေ ငါ...👀",
    "အားးး... မကြားချင်ဘူး မကြားချင်ဘူး...😖",
    "ကိုကို မီးကို အရင်ကလောက်လည်း မချစ်တော့ဘူး...🥺"
];

showModal = () => {
    window.dialog.showModal();
    iLang.innerHTML = langs[Math.floor(Math.random() * langs.length)];
}

closeModal = () => {
    window.dialog.close();
    iLang.innerHTML = "";
}
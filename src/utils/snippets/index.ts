// Optional chaining
// No more "cannot read property of undefined"


const response = {
    user: {
        name: "overment",
        email: "email@test.io",
        phone: "try again",
        address: undefined
    }
}
// Operator ten pozwala na sprawdzenie zagniezdzonych wlasciwosci w obiekcie - sprawdza czy istnieja, bez pisania ifow

response.user?.name // overment
// Stary sposob ze sprawdzaniem
response.user === null ? undefined : response.user.name;

// Operator nullish coalescing

const setVolume = (volume) => volume || 50; // ustaw 50 jezeli volume jest niepodany
// W powyzszym zapisie jezeli wartosc przkazana do parametru jest falsy, funkcja zwroci domyslna wartosc
setVolume(30) /*?*/ 30
setVolume(undefined) /*?*/ 50
// A co kiedy:
setVolume(0) /*?*/ 50
// W tym przypadku logical 'or' operator jest odpowiedzialny czy nasz argument jest wartoscia falsy lub nie

// Przyklady falsy z wartoscia domyslna
null || "default" /*?*/ default | default
undefined || "default" /*?*/ default | default
false || "default" /*?*/ default | default
"" || "default" /*?*/ default | default

// Roznica miedzy operatorem || a ?? jest taka ze wartosc domyslna zostanie zwrocona tylko wtedy kiedy po lewej stronie bedziemy mieli null lub undefined

// Dla przykladu zastosowanie z optional chaining:

const volume = user?.video?.testAudi ?? 60;

null ?? "default" /*?*/ default | default
undefined ?? "default" /*?*/ default | default
false ?? "default" /*?*/ false | n/a
"" ?? "default" /*?*/ [empty string] | n/a

// Poprawnie z ??
const setVolume = (volume) => volume ?? 50; // ustaw 50 jezeli volume jest niepodany
setVolume(0) /*?*/ 0



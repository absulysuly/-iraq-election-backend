"use strict";
// Shared types and constants for Iraq Election Platform
Object.defineProperty(exports, "__esModule", { value: true });
exports.GOVERNORATES = exports.POST_TYPES = exports.PostType = exports.UserRole = void 0;
// Enums
var UserRole;
(function (UserRole) {
    UserRole["Voter"] = "Voter";
    UserRole["Candidate"] = "Candidate";
})(UserRole || (exports.UserRole = UserRole = {}));
var PostType;
(function (PostType) {
    PostType["Post"] = "Post";
    PostType["Reel"] = "Reel";
})(PostType || (exports.PostType = PostType = {}));
// Export PostType values as constants for easier use
exports.POST_TYPES = PostType;
// Iraqi Governorates
exports.GOVERNORATES = [
    'Baghdad',
    'Basra',
    'Nineveh',
    'Erbil',
    'Sulaymaniyah',
    'Dohuk',
    'Anbar',
    'Diyala',
    'Kirkuk',
    'Saladin',
    'Najaf',
    'Karbala',
    'Wasit',
    'Babil',
    'Maysan',
    'Dhi Qar',
    'Al-Qādisiyyah',
    'Muthanna',
];

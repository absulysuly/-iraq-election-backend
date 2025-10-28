"use strict";
// Shared types for Iraq Election Platform
Object.defineProperty(exports, "__esModule", { value: true });
exports.GOVERNORATES = exports.PostType = exports.UserRole = void 0;
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
// Iraq Governorates
exports.GOVERNORATES = [
    { id: 'baghdad', name: 'بغداد', enName: 'Baghdad', slug: 'baghdad' },
    { id: 'basra', name: 'البصرة', enName: 'Basra', slug: 'basra' },
    { id: 'mosul', name: 'الموصل', enName: 'Mosul', slug: 'mosul' },
    { id: 'erbil', name: 'أربيل', enName: 'Erbil', slug: 'erbil' },
    { id: 'sulaymaniyah', name: 'السليمانية', enName: 'Sulaymaniyah', slug: 'sulaymaniyah' },
    { id: 'najaf', name: 'النجف', enName: 'Najaf', slug: 'najaf' },
    { id: 'karbala', name: 'كربلاء', enName: 'Karbala', slug: 'karbala' },
    { id: 'kirkuk', name: 'كركوك', enName: 'Kirkuk', slug: 'kirkuk' },
    { id: 'diyala', name: 'ديالى', enName: 'Diyala', slug: 'diyala' },
    { id: 'anbar', name: 'الأنبار', enName: 'Anbar', slug: 'anbar' },
    { id: 'duhok', name: 'دهوك', enName: 'Duhok', slug: 'duhok' },
    { id: 'babylon', name: 'بابل', enName: 'Babylon', slug: 'babylon' },
    { id: 'wasit', name: 'واسط', enName: 'Wasit', slug: 'wasit' },
    { id: 'saladin', name: 'صلاح الدين', enName: 'Saladin', slug: 'saladin' },
    { id: 'qadisiyyah', name: 'القادسية', enName: 'Al-Qadisiyyah', slug: 'qadisiyyah' },
    { id: 'maysan', name: 'ميسان', enName: 'Maysan', slug: 'maysan' },
    { id: 'dhi-qar', name: 'ذي قار', enName: 'Dhi Qar', slug: 'dhi-qar' },
    { id: 'muthanna', name: 'المثنى', enName: 'Al-Muthanna', slug: 'muthanna' },
];

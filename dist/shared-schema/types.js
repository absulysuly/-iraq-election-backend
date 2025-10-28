"use strict";
// Shared types for the Iraq Election Platform
// This module provides shared type definitions used across the backend
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
// Governorate constants
exports.GOVERNORATES = {
    baghdad: {
        id: 'baghdad',
        name: 'بغداد',
        enName: 'Baghdad',
        slug: 'baghdad',
    },
    basra: {
        id: 'basra',
        name: 'البصرة',
        enName: 'Basra',
        slug: 'basra',
    },
    nineveh: {
        id: 'nineveh',
        name: 'نينوى',
        enName: 'Nineveh',
        slug: 'nineveh',
    },
    kirkuk: {
        id: 'kirkuk',
        name: 'كركوك',
        enName: 'Kirkuk',
        slug: 'kirkuk',
    },
    anbar: {
        id: 'anbar',
        name: 'الأنبار',
        enName: 'Anbar',
        slug: 'anbar',
    },
    diyala: {
        id: 'diyala',
        name: 'ديالى',
        enName: 'Diyala',
        slug: 'diyala',
    },
    najaf: {
        id: 'najaf',
        name: 'النجف',
        enName: 'Najaf',
        slug: 'najaf',
    },
    karbala: {
        id: 'karbala',
        name: 'كربلاء',
        enName: 'Karbala',
        slug: 'karbala',
    },
    wasit: {
        id: 'wasit',
        name: 'واسط',
        enName: 'Wasit',
        slug: 'wasit',
    },
    saladin: {
        id: 'saladin',
        name: 'صلاح الدين',
        enName: 'Saladin',
        slug: 'saladin',
    },
    qadisiyyah: {
        id: 'qadisiyyah',
        name: 'القادسية',
        enName: 'Qadisiyyah',
        slug: 'qadisiyyah',
    },
    babil: {
        id: 'babil',
        name: 'بابل',
        enName: 'Babil',
        slug: 'babil',
    },
    dhi_qar: {
        id: 'dhi_qar',
        name: 'ذي قار',
        enName: 'Dhi Qar',
        slug: 'dhi_qar',
    },
    maysan: {
        id: 'maysan',
        name: 'ميسان',
        enName: 'Maysan',
        slug: 'maysan',
    },
    muthanna: {
        id: 'muthanna',
        name: 'المثنى',
        enName: 'Muthanna',
        slug: 'muthanna',
    },
    duhok: {
        id: 'duhok',
        name: 'دهوك',
        enName: 'Duhok',
        slug: 'duhok',
    },
    erbil: {
        id: 'erbil',
        name: 'أربيل',
        enName: 'Erbil',
        slug: 'erbil',
    },
    sulaymaniyah: {
        id: 'sulaymaniyah',
        name: 'السليمانية',
        enName: 'Sulaymaniyah',
        slug: 'sulaymaniyah',
    },
};

import { TranslateService } from "@ngx-translate/core";
import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
  {
    routeLink: 'home',
    icon: 'fas fa-house-damage',
    label: "Home",
  },
  {
    routeLink: 'profile',
    icon: 'fas fa-user',
    label: "Profile",
  },
  {
    routeLink: 'post',
    icon: 'fas fa-file-invoice',
    label: 'Post',

    items: [
      {
          routeLink: 'post/calihousing',
          label: 'Predict CaliHousing',
      },
      {
        routeLink: 'post/face_recognition',
        label: 'Face Recognition',
      },
      {
        routeLink: 'post/knn',
        label: 'KNN',
      }
    ]
  },
];

export const add = [
  {
    routeLink: 'voucher',
    icon: 'fas fa-tag',
    label: 'Voucher'
  },
  {
    routeLink: 'payment',
    icon: 'far fa-credit-card',
    label: 'Payment'
  },
  {
    routeLink: 'blog',
    icon: 'fas fa-blog',
    label: 'Blog'
  },
  {
    routeLink: 'web-information',
    icon: 'fas fa-info',
    label: 'Web Information'
  },
  {
    routeLink: 'guide',
    icon: 'fas fa-book',
    label: 'Guide',

    items: [
      {
        routeLink: 'guide/account',
        label: 'Account',
      },
      {
        routeLink: 'guide/language',
        label: 'Language',
      },
      {
          routeLink: 'guide/order',
          label: 'Order',
      },
      {
        routeLink: 'guide/payment',
        label: 'Payment',
      }
    ]
  },
  {
    routeLink: 'setting',
    icon: 'fas fa-cog',
    label: 'Setting'
  }
]

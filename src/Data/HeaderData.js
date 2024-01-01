// import second from '../assets/homeImages/'
export const NavLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
    child: true,
    subNav: [
      {
        subtitle: "about school",
        path: "/about-school",
      },
      {
        subtitle: "principal message",
        path: "/principal-message",
      },
      {
        subtitle: "facility",
        path: "/facility",
      },
    ],
  },
  {
    title: "Admission",
    // path: "/admission",
    child: true,
    subNav: [
      {
        subtitle: "admission overview",
        path: "/admission-overview",
      },
      {
        subtitle: "admission process",
        path: "/admission-process",
      },
      {
        subtitle: "admission form",
        path: "/admission-form",
      },
      {
        subtitle: "academic calender",
        path: "/academic-calender",
      },
    ],
  },
  {
    title: "Information",
    path: "/information",
    child: true,
    subNav: [
      {
        subtitle: "admin staff",
        path: "/admin-staff",
      },
      {
        subtitle: "teaching staff",
        path: "/teaching-staff",
      },
      {
        subtitle: "non-teaching staff",
        path: "/non-teaching-staff",
      },
    ],
  },
  {
    title: "Gallery",
    path: "/gallery",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

export const LoginNavLink ={
    title: "Login",
    path: "/login",
    child: false,
    subNav: [
      {
        subtitle: "teacher login",
        path: "/login",
      },
      {
        subtitle: "student login",
        path: "/student-login",
      },
      {
        subtitle: "alumini registation",
        path: "/alumini-registation",
      },
    ],
}
  
export const homeSlider = [
  {
    image: "../assets/homeImages/slide1.webp",
  },
  {
    image: "../assets/homeImages/slide2.webp",
  },
  {
    image: "../assets/homeImages/slide3.webp",
  },
];
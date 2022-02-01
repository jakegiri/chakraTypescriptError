export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    children: [
      {
        label: "Explore Design Work",
        subLabel: "Trending Design to inspire you",
        href: "#",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "#",
      },
    ],
  },
  {
    label: "Services",
    children: [
      {
        label: "Web Development",
        subLabel: "Performance with latest tech in industry",
        href: "#",
      },
      {
        label: "Content Writing",
        subLabel: "Engaging content with power words",
        href: "#",
      },
      {
        label: "Graphics Desinging",
        subLabel: "",
        href: "#",
      },
    ],
  },
  {
    label: "Blogs",
    href: "/blogs",
  },
  {
    label: "Hire Designers",
    href: "#",
  },
];

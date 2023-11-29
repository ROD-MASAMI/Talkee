import { ISideMenuGroup } from "@/app/admin/components/SideMenuGroups";

export const SideBarMenuList: ISideMenuGroup[] = [
  {
    title: "Group1",
    items: [
      {
        label: "link1",
        href: "/admin",
        icon: "home",
      },
      {
        label: "table",
        href: "/admin/table",
        icon: "settings",
      },
    ],
  },

  {
    title: "Group2",
    items: [
      {
        label: "link3",
        href: "/home",
        icon: "users",
      },
      {
        label: "link4",
        href: "/home",
        icon: "library",
      },
      {
        label: "link5",
        href: "/home",
        icon: "barchart",
      },
    ],
  },
  {
    title: "Group3",
    items: [
      {
        label: "link6",
        href: "/home",
        icon: "event",
      },
      {
        label: "link7",
        href: "/home",
        icon: "help",
      },
      {
        label: "link8",
        href: "/home",
        icon: "trash",
      },
    ],
  },
];

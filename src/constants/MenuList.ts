import { MultilevelNodes } from "react-multilevel-menu";

const list: MultilevelNodes[] = [
  {
    label: "Xe Đạp & Thiết Bị",
    items: [
      {
        label: "Bike Review",
        faIcon: "fab fa-accusoft",
        activeFaIcon: "fab fa-accusoft",
      },
      {
        label: "Item 2.2",
        faIcon: "fas fa-anchor",
        activeFaIcon: "fab fa-accusoft",
      },
    ],
  },
  {
    label: "Item 2",
    faIcon: "fas fa-anchor",
    items: [
      {
        label: "Item 2.1",
        faIcon: "fab fa-accusoft",
        activeFaIcon: "fab fa-accusoft",
        disabled: true,
      },
      {
        label: "Item 2.2",
        faIcon: "fas fa-anchor",
        activeFaIcon: "fab fa-accusoft",
      },
    ],
  },
  {
    label: "Item 3",
    faIcon: "fab fa-accusoft",
    activeFaIcon: "fas fa-anchor",
    onSelected: function () {
      console.log("Item 3");
    },
  },
  {
    label: "Item 4",
    link: "/item-4",
    faIcon: "fab fa-accusoft",
    hidden: true,
  },
];

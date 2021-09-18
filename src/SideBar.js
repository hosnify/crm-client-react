import React, { useState } from "react";
import { Menu } from "semantic-ui-react";

const SideBar = () => {
  const [activeItem, setActiveItem] = useState();
  const handleItemClick = (e, { name }) => setActiveItem(name);
  const items = [
    {
      title: "Users",
      links: [
        { href: "/app/users", title: "Show users" },
        { href: "/app/user/add", title: "add user" },
      ],
    },
    {
      title: "Leads",
      links: [
        { href: "/app/Leads", title: "Show Leads" },
        { href: "/app/Lead/add", title: "Add Lead" },
      ],
    },
  ];
  return (
    <Menu vertical>
      {items.map((item) => (
        <Menu.Item>
          <Menu.Header key={item.title}>{item.title}</Menu.Header>

          <Menu.Menu key={item.title}>
            {item.links.map((subItem) => (
              <Menu.Item
                key={subItem.title}
                name={subItem.title}
                active={activeItem === subItem.title}
                onClick={handleItemClick}
              />
            ))}
          </Menu.Menu>
        </Menu.Item>
      ))}
    </Menu>
  );
};
export default SideBar;

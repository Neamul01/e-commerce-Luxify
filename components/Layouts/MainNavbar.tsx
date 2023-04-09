import {
  createStyles,
  Menu,
  Group,
  Center,
  Burger,
  rem,
  Input,
  Navbar,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import { IconChevronDown } from "@tabler/icons-react";
// import { MantineLogo } from "@mantine/ds";
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";

const useStyles = createStyles((theme) => ({
  header: {
    borderBottom: 0,
  },

  inner: {
    height: rem(56),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: "filled", color: theme.primaryColor })
          .background!,
        0.1
      ),
    },
  },

  linkLabel: {
    marginRight: rem(5),
  },
}));

interface HeaderSearchProps {
  link: string;
  label: string;
  links2?: HeaderSearchProps[];
}

const links: HeaderSearchProps[] = [
  { link: "/", label: "Home" },
  { link: "products", label: "Products" },
  {
    link: "/about",
    label: "About",
    links2: [
      { link: "/", label: "Home" },
      { link: "/about", label: "About" },
      { link: "/contact", label: "Contact" },
    ],
  },
  { link: "/contact", label: "Contact" },
  { link: "/dashboard", label: "Dashboard" },
];

export function NavHeader() {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // Add the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items = links.map((link) => {
    const menuItems = link?.links2?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <AiOutlineDown />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Link key={link.label} href={link.link} className={classes.link}>
        {link.label}
      </Link>
    );
  });

  return (
    <Navbar
      height={56}
      className={` flex-shrink-0 z-50 shadow-lg  ${
        scrolled
          ? "fixed !top-0 left-0 transform transition duration-500 ease-in-out translate-y-0"
          : "static top-20 left-0"
      }}`}
    >
      <div
        className={`${classes.inner} justify-between w-full max-w-7xl mx-auto`}
      >
        <div className="flex gap-1 cursor-pointer">
          <Menu
            trigger="hover"
            transitionProps={{ exitDuration: 0 }}
            withinPortal
          >
            <Menu.Target>
              <Center>
                <AiOutlineSearch className="text-2xl" />
                <span>Search</span>
              </Center>
            </Menu.Target>
            <Menu.Dropdown>
              <Input placeholder="Search" />
            </Menu.Dropdown>
          </Menu>
        </div>
        <Group spacing={5} className={`${classes.links}`}>
          {items}
        </Group>
        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
          color="#fff"
        />
      </div>
    </Navbar>
  );
}

export default NavHeader;

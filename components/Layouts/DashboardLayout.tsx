import { useState } from "react";
import {
  createStyles,
  Navbar,
  Group,
  Code,
  getStylesRef,
  rem,
} from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";

const useStyles = createStyles((theme) => ({
  header: {
    paddingBottom: theme.spacing.md,
    marginBottom: `calc(${theme.spacing.md} * 1.5)`,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },

  footer: {
    paddingTop: theme.spacing.md,
    marginTop: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },

  link: {
    ...theme.fn.focusStyles(),
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    fontSize: theme.fontSizes.sm,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[7],
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,

      [`& .${getStylesRef("icon")}`]: {
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
      },
    },
  },

  linkIcon: {
    ref: getStylesRef("icon"),
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[6],
    marginRight: theme.spacing.sm,
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
      [`& .${getStylesRef("icon")}`]: {
        color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
          .color,
      },
    },
  },
}));

const data = [
  { link: "/dashboard", label: "Dashboard", icon: "IconReceipt2" },
  { link: "", label: "Orders", icon: "IconFingerprint" },
  { link: "", label: "Address", icon: "IconKey" },
  { link: "/dashboard/profile", label: "Profile", icon: "IconBellRinging" },
];

interface Props {
  children: React.ReactNode;
}

// todo: update active link when use storage or redux
export default function DashboardLayout({ children }: Props) {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState("Dashboard");
  const router = useRouter();

  const links = data.map((item) => (
    <Link
      className={`${cx(classes.link, {
        [classes.linkActive]: item.label === active,
      })} font-bold`}
      href={item.link}
      key={item.label}
    >
      {/* onClick={(event) => {
          setActive(item.label);
          router.push(item.link);
          event.preventDefault();
        }} */}
      {/* <item.icon className={`${classes.linkIcon}`} stroke={1.5} /> */}
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white">
        <h2 className="text-4xl font-bold w-full text-center pt-10 pb-6">
          My Account
        </h2>
        <div className="flex">
          <Navbar height={700} width={{ sm: 300 }} p="md">
            <Navbar.Section grow>
              {/* <Group className={classes.header} position="apart">
                logo
              </Group> */}
              {links}
            </Navbar.Section>

            <Navbar.Section className={classes.footer}>
              <a
                href="#"
                className={classes.link}
                onClick={(event) => event.preventDefault()}
              >
                {/* <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} /> */}
                <span>Change account</span>
              </a>

              <a
                href="#"
                className={classes.link}
                onClick={(event) => event.preventDefault()}
              >
                {/* <IconLogout className={classes.linkIcon} stroke={1.5} /> */}
                <span>Logout</span>
              </a>
            </Navbar.Section>
          </Navbar>
          <div className="w-full px-2">{children}</div>
        </div>
      </div>
    </div>
  );
}

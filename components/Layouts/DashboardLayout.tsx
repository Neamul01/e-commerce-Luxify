import { useState } from "react";
import { createStyles, Navbar, getStylesRef, rem } from "@mantine/core";
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
  { link: "/dashboard/orders", label: "Orders", icon: "IconFingerprint" },
  { link: "/dashboard/address", label: "Address", icon: "IconKey" },
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
      })} font-bold border-b`}
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
    <div className=" bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold w-full text-center pt-10 pb-6">
          My Account
        </h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="p-4 md:p-0 h-full w-full md:w-[30rem] border-b-2 md:border-none">
            <div>
              {/* <Group className={classes.header} position="apart">
                logo
              </Group> */}
              {links}
              <Link
                className={`${cx(
                  classes.link,
                  {}
                )} font-extrabold text-black border-b`}
                href={"/"}
              >
                Log Out
              </Link>
            </div>
          </div>
          <div className="w-full px-2 my-6">{children}</div>
        </div>
      </div>
    </div>
  );
}

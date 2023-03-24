import {
  createStyles,
  Text,
  Container,
  ActionIcon,
  Group,
  rem,
} from "@mantine/core";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

const useStyles = createStyles((theme) => ({
  footer: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  logo: {
    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  description: {
    marginTop: rem(5),

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
      textAlign: "center",
    },
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  groups: {
    display: "flex",
    flexWrap: "wrap",

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  wrapper: {
    width: rem(160),
  },

  link: {
    display: "block",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: rem(3),
    paddingBottom: rem(3),

    "&:hover": {
      textDecoration: "underline",
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
    color: theme.white,
  },

  afterFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  social: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

type MainFooterProps = {
  title: string;
  links: { label: string; link: string }[];
}[];

const data: MainFooterProps = [
  {
    title: "About Us",
    links: [
      { label: "About Us", link: "/about-us" },
      { label: "Order History", link: "/order-history" },
      { label: "Returns", link: "/returns" },
      { label: "Custom Service", link: "/customer-service" },
      { label: "Terms & Condition", link: "/terms" },
    ],
  },
  {
    title: "Customer Service",
    links: [
      { label: "Payment Methods", link: "/payment" },
      { label: "Money-back Guarantee!", link: "/money-back" },
      { label: "Returns", link: "/returns" },
      { label: "Shipping", link: "/shipping" },
      { label: "Terms and Conditions", link: "/terms" },
    ],
  },
  {
    title: "My Account",
    links: [
      { label: "Sign in", link: "/sign-in" },
      { label: "View Cart", link: "/view-cart" },
      { label: "My Wishlist", link: "/wishlist" },
      { label: "Track My Order", link: "/orders" },
      { label: "Help", link: "/help" },
    ],
  },
];

export function MainFooter() {
  const { classes } = useStyles();

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<"a">
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div
        className={`${classes.wrapper} flex flex-col gap-1`}
        key={group.title}
      >
        <Text className={`${classes.title} mb-4`}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={`${classes.footer} bg-[#222] text-white px-4`}>
      <div className="flex flex-col max-w-7xl mx-auto">
        <div className={classes.inner}>
          <div className={`${classes.logo} max-w-[20rem]`}>
            <span className="text-2xl font-bold">LuxiFy</span>
            <Text
              size="sm"
              color="dimmed"
              className={`${classes.description} mt-5`}
            >
              Fringilla urna porttitor rhoncus dolor purus luctus venenatis
              lectus magna fringilla diam maecenas ultricies mi eget mauris.
            </Text>
            <Text size="md" color="dimmed" className="mt-5">
              example@luxify.com
            </Text>
          </div>
          <div className={`${classes.groups} gap-16`}>{groups}</div>
        </div>
        <div className={classes.afterFooter}>
          <Text color="dimmed" size="sm">
            © 2020 LuxiFy.dev. All rights reserved.
          </Text>

          <Group spacing={0} className={classes.social} position="right" noWrap>
            <ActionIcon size="lg">
              <BsTwitter className="text-lg" />
            </ActionIcon>
            <ActionIcon size="lg">
              <BsYoutube className="text-lg" />
            </ActionIcon>
            <ActionIcon size="lg">
              <BsInstagram className="text-lg" />
            </ActionIcon>
          </Group>
        </div>
      </div>
    </footer>
  );
}

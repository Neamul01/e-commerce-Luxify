import React from "react";
import {
  createStyles,
  Text,
  Avatar,
  Group,
  TypographyStylesProvider,
  Paper,
  rem,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  review: {
    padding: `${theme.spacing.lg} ${theme.spacing.xl}`,
  },

  body: {
    paddingLeft: rem(54),
    paddingTop: theme.spacing.sm,
    fontSize: theme.fontSizes.sm,
  },

  content: {
    "& > p:last-child": {
      marginBottom: 0,
    },
  },
}));

type ReviewsDatas = {
  id: number;
  postedAt: string;
  body: string;
  rating: number;
  author: {
    name: string;
    image: string;
  };
}[];

const ReviewsDatas: ReviewsDatas = [
  {
    id: 1,
    postedAt: "September 22, 2020 at 9:42 pm",
    author: {
      name: "Abdur Rouf",
      image: "",
    },
    rating: 3,
    body: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
  },
];

export default function ReviewsTab() {
  const { classes } = useStyles();

  return (
    <>
      {ReviewsDatas.map((review) => (
        <Paper
          key={review.id}
          withBorder
          radius="md"
          className={classes.review}
        >
          <Group>
            <Avatar
              src={review.author.image}
              alt={review.author.name}
              radius="xl"
            />
            <div>
              <Text fz="sm">{review.author.name}</Text>
              <Text fz="xs" c="dimmed">
                {review.postedAt}
              </Text>
            </div>
          </Group>
          <TypographyStylesProvider className={classes.body}>
            <div
              className={classes.content}
              dangerouslySetInnerHTML={{ __html: review.body }}
            />
          </TypographyStylesProvider>
        </Paper>
      ))}
    </>
  );
}

import React from "react";
import {
  createStyles,
  Text,
  Avatar,
  Group,
  TypographyStylesProvider,
  Paper,
  rem,
  Rating,
} from "@mantine/core";
import AddReview from "./AddReview";

const useStyles = createStyles((theme) => ({
  review: {
    padding: `${theme.spacing.lg} ${theme.spacing.xl}`,
  },

  body: {
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
    <div>
      <div className="">
        {ReviewsDatas.map((review) => (
          <Paper
            key={review.id}
            withBorder
            radius="md"
            className={`${classes.review} !border-none`}
          >
            <Group className="grid grid-cols-12 items-start">
              <Avatar
                src={review.author.image}
                alt={review.author.name}
                radius="xl"
                size="xl"
                className="col-span-1"
              />
              <div className="w-full col-span-11">
                <Text fz="sm">{review.author.name}</Text>
                <div className="w-full flex justify-between">
                  <div className="w-full">
                    <Text fz="xs" c="dimmed">
                      {review.postedAt}
                    </Text>
                  </div>
                  <div className="w-full flex justify-end">
                    <Rating value={review.rating} fractions={2} readOnly />
                  </div>
                </div>
                <TypographyStylesProvider className={classes.body}>
                  <div
                    className={classes.content}
                    dangerouslySetInnerHTML={{ __html: review.body }}
                  />
                </TypographyStylesProvider>
              </div>
            </Group>
          </Paper>
        ))}
      </div>
      <div className="mt-10">
        <AddReview />
      </div>
    </div>
  );
}

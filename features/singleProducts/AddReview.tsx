import {
  Button,
  Checkbox,
  Group,
  Rating,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { useState } from "react";

export default function AddReview() {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      comment: "",
      rating: 0,
      saveInfo: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
  const [rating, setRating] = useState();

  const submitButton = () => {
    console.log("submit", form.values);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold">Add a review</h2>
      <p className="text-xs text-gray-600">
        Your email address will not be published. Required fields are marked *
      </p>
      <div className="w-full">
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <div className="mt-6 mb-4 flex gap-3">
            <p className="font-bold">Your Rating*</p> {rating}
            <Rating
              defaultValue={rating}
              ref={rating}
              fractions={2}
              {...form.getInputProps("rating")}
            />
          </div>
          <Textarea
            withAsterisk
            minRows={8}
            placeholder="Comment*"
            {...form.getInputProps("comment")}
          />

          <div className="w-full flex gap-8 mt-8 mb-6">
            <TextInput
              withAsterisk
              type="text"
              placeholder="Your name"
              className="w-full"
              size="md"
              {...form.getInputProps("name")}
            />
            <TextInput
              withAsterisk
              type="email"
              placeholder="Your email"
              className="w-full"
              size="md"
              {...form.getInputProps("email")}
            />
          </div>

          <Checkbox
            mt="md"
            label="Save my name, email, and website in this browser for the next time I comment."
            {...form.getInputProps("saveInfo", { type: "checkbox" })}
          />

          <Group position="right" mt="md">
            <Button
              type="submit"
              className="bg-blue-800"
              onClick={submitButton}
            >
              Submit
            </Button>
          </Group>
        </form>
      </div>
    </div>
  );
}

import { IllustrationEmptyIcon } from "../icons";

export const EmptySection = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-24">
      <IllustrationEmptyIcon />
      <h3 className="text-4xl font-bold mt-10">Let{"'"}s get you started</h3>
      <p className="2xl:w-[55%] mt-10 text-grey text-center">
        Use the “Add new link” button to get started. Once you have more than
        one link, you can reorder and edit them. We’re here to help you share
        your profiles with everyone!
      </p>
    </div>
  );
};

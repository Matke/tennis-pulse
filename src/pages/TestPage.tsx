// components
import Button from "@/components/buttons/Button";
import ButtonIcon from "@/components/buttons/ButtonIcon";
import Typography from "@/components/text/Typography";

// icons
import { MdOutlineSportsTennis } from "react-icons/md";
import { BiCheck, BiSolidTennisBall } from "react-icons/bi";
import { GiTennisCourt } from "react-icons/gi";
import { FaTrash } from "react-icons/fa";
import { FaHourglassStart } from "react-icons/fa";
import { RiAlertFill, RiSettings3Fill } from "react-icons/ri";
import { PiSneakerMoveFill } from "react-icons/pi";
import { MdDelete } from "react-icons/md";

import { useState } from "react";
import ModalBase from "@/components/modals/ModalBase";
import Input from "@/components/inputs/InputText";
import Card from "@/components/ui/Card";
import InputPassword from "@/components/inputs/InputPassword";
import Chip from "@/components/ui/Chip";

const TestPage = () => {
  const [isDataFetching, setIsDataFetching] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-charcoal-900 fixed flex h-screen w-screen flex-col">
      <div className="bg-tp-primary text-platinum-950 z-10 w-full p-2 tracking-wider">
        Tennis Pulse App - Test Component Page
      </div>
      <div className="bg-charcoal-900 overflow-y-auto">
        <h1 className="text-tp-typography p-2 text-2xl underline">Buttons</h1>
        <div className="flex h-60 max-w-full flex-col items-center gap-2 p-2">
          <Button
            label="Novak Djokovic"
            themeColor="primary"
            //   disabled
            fullWidth
            isLoading={isDataFetching}
            onClick={() => setIsDataFetching(!isDataFetching)}
          />
          <Button
            label="Novak Djokovic"
            themeColor="primary"
            disabled={isDataFetching}
            className="w-72"
            uppercaseLabel
            buttonSize="huge"
            isLoading={isDataFetching}
            onClick={() => setIsDataFetching(!isDataFetching)}
            loaderText="Serving data"
          />
          <div className="w-full flex-col items-center justify-center gap-2 space-y-2 space-x-2 md:flex md:flex-row md:items-center md:justify-between md:space-y-0 md:space-x-0">
            <Button
              label="Novak Djokovic"
              themeColor="primary"
              onClick={() => console.log("Na ovome kroku")}
              icon={<FaHourglassStart />}
              isLoading
            />
            <Button
              label="Novak Djokovic"
              themeColor="primary"
              isLoading
              onClick={() => console.log("Na ovome kroku")}
            />
            <Button
              label="Settings"
              themeColor="primary"
              onClick={() => console.log("Na ovome kroku")}
              icon={<RiSettings3Fill className="h-5 w-5" />}
            />
            <Button
              label="Novak Djokovic"
              themeColor="primary"
              onClick={() => setIsDataFetching(!isDataFetching)}
              className="self-end"
              icon={<MdOutlineSportsTennis className="h-5 w-5" />}
              loaderWithLabel={true}
              isLoading={isDataFetching}
              iconPosition="right"
            />
            <Button
              label="Book court"
              themeColor="primary"
              onClick={() => console.log("Na ovome kroku")}
              className="self-end"
              //   isLoading
              loaderWithLabel
              icon={<GiTennisCourt className="h-5 w-5" />}
            />
            <Button
              label="Start match"
              themeColor="primary"
              onClick={() => console.log("Na ovome kroku")}
              className="self-end"
              //   isLoading
              loaderWithLabel
              icon={<PiSneakerMoveFill className="h-5 w-5" />}
            />
          </div>
        </div>
        <div className="ml-10 flex max-w-160 flex-col gap-2">
          <Button
            label="Novak Djokovic"
            themeColor="primary"
            onClick={() => setIsDataFetching(!isDataFetching)}
            // isLoading
            fullWidth={false}
            icon={<BiSolidTennisBall className="h-5 w-5" />}
            className="self-center"
            isLoading={isDataFetching}
            loaderWithLabel
            disabled={isDataFetching}
          />
          <Button
            label="Novak Djokovic"
            themeColor="primary"
            onClick={() => console.log("Na ovome kroku")}
            className="self-end"
          />
          <Button
            label="Novak Djokovic"
            themeColor="primary"
            onClick={() => console.log("Na ovome kroku")}
            className="self-end"
            isLoading
            loaderWithLabel
          />

          <Button
            label="Novak Djokovic"
            themeColor="warning"
            onClick={() => console.log("Na ovome kroku")}
            className="self-end"
            isLoading
            loaderWithLabel
            disabled
          />
          <Button
            label="Novak Djokovic"
            themeColor="tertiary"
            onClick={() => console.log("Na ovome kroku")}
            className="self-center"
            isLoading
            loaderWithLabel
          />
          <Button
            label="Novak Djokovic"
            themeColor="secondary"
            onClick={() => console.log("Na ovome kroku")}
            className="self-center"
            isLoading
            loaderWithLabel
          />
          <Button
            label="Novak Djokovic"
            themeColor="secondary"
            onClick={() => console.log("Na ovome kroku")}
            className="self-center"
            loaderWithLabel
          />
          <Button
            label="Novak Djokovic"
            themeColor="primary"
            onClick={() => console.log("Na ovome kroku")}
            className="self-center"
            loaderWithLabel
            buttonSize="small"
            icon={<BiSolidTennisBall />}
          />
          <Button
            label="Novak Djokovic"
            themeColor="primary"
            onClick={() => console.log("Na ovome kroku")}
            className="self-center"
            loaderWithLabel
            buttonSize="medium"
          />
          <Button
            label="Novak Djokovic"
            themeColor="primary"
            onClick={() => console.log("Na ovome kroku")}
            className="self-center"
            loaderWithLabel
            buttonSize="large"
            uppercaseLabel
          />
          <Button
            label="Novak Djokovic"
            themeColor="primary"
            onClick={() => console.log("Na ovome kroku")}
            className="self-center"
            loaderWithLabel
            buttonSize="huge"
            uppercaseLabel
            // isLoading
            icon={<BiSolidTennisBall className="h-6 w-6" />}
          />
          <Button
            label="Novak Djokovic"
            themeColor="primary"
            onClick={() => console.log("Na ovome kroku")}
            className="self-center"
            loaderWithLabel
          />
          <Button
            label="Delete match"
            themeColor="warning"
            onClick={() => console.log("Na ovome kroku")}
            className="self-center"
            loaderWithLabel
            icon={<FaTrash className="h-4 w-4" />}
          />
          <Button
            label="Novak Djokovic"
            themeColor="primary"
            onClick={() => console.log("Na ovome kroku")}
            className="self-center"
            loaderWithLabel
          />
          <Button
            label="Novak Djokovic"
            themeColor="primary"
            onClick={() => console.log("Na ovome kroku")}
            className="ml-2 w-80 self-center rounded-none"
            loaderWithLabel
          />
        </div>

        <h1 className="text-tp-typography p-2 text-2xl underline">
          Typography
        </h1>
        <div className="p-2">
          <Typography variant="title" as="h1" className="font-bold">
            Tennis Pulse App
          </Typography>
          <Typography
            variant="subtitle"
            as="h2"
            className="text-2xl font-semibold underline"
          >
            Tennis Pulse App
          </Typography>
          <Typography
            variant="paragraph"
            as="h4"
            className="text-8xl font-semibold uppercase underline"
          >
            Tennis Pulse App dasd
          </Typography>
          <Typography
            variant="paragraph-medium"
            as="h3"
            className="font-semibold"
          >
            Tennis Pulse App
          </Typography>
          <Typography variant="label" className="text-9xl font-semibold">
            Tennis Pulse App
          </Typography>
          <Typography variant="label-small" className="font-semibold">
            Tennis Pulse App
          </Typography>
        </div>

        <Typography variant="subtitle" as="h2" className="p-2 underline">
          Button Icons
        </Typography>

        <div className="m-4 flex items-center justify-start gap-2">
          <ButtonIcon
            icon={<BiSolidTennisBall className="h-5 w-5" />}
            themeColor="tertiary"
            variant="flat"
            rounded
          />
          <ButtonIcon
            icon={<BiSolidTennisBall className="h-5 w-5" />}
            themeColor="primary"
            variant="filled"
            // className="rounded-md"
            hoverClass
            isLoading
          />
          <ButtonIcon
            icon={<BiSolidTennisBall className="h-5 w-5" />}
            themeColor="primary"
            variant="outlined"
          />
          <ButtonIcon
            icon={<BiSolidTennisBall className="h-5 w-5" />}
            themeColor="secondary"
            variant="filled"
            isLoading
          />
          <ButtonIcon
            icon={<BiSolidTennisBall className="h-5 w-5" />}
            themeColor="secondary"
            variant="outlined"
          />
          <ButtonIcon
            icon={<BiSolidTennisBall className="h-5 w-5" />}
            themeColor="secondary"
            variant="flat"
            rounded
          />
          <ButtonIcon
            icon={<BiSolidTennisBall className="h-5 w-5" />}
            themeColor="warning"
            variant="outlined"
            rounded
          />
          <ButtonIcon
            icon={<BiSolidTennisBall className="h-5 w-5" />}
            themeColor="warning"
            variant="flat"
            rounded
            hoverClass
          />
          <ButtonIcon
            icon={<BiSolidTennisBall className="h-5 w-5" />}
            themeColor="warning"
            variant="filled"
            rounded
            hoverClass
          />
          <ButtonIcon
            icon={<MdDelete className="h-5 w-5" />}
            themeColor="warning"
            variant="filled"
            rounded
          />
          <ButtonIcon
            icon={<MdDelete className="h-5 w-5" />}
            rounded
            disabled
            themeColor="primary"
            variant="filled"
          />
          <ButtonIcon
            icon={
              <MdDelete className="h-5 w-5 hover:not-disabled:opacity-90" />
            }
            rounded
          />
          <ButtonIcon
            icon={<MdDelete className="h-5 w-5" />}
            rounded
            backgroundColor="bg-tp-secondary"
            borderColor="border-tp-secondary"
          />
          <ButtonIcon
            icon={<MdDelete className="h-10 w-10" />}
            rounded
            backgroundColor="bg-tp-tertiary"
            borderColor="border-none"
            iconColor="text-tp-typography"
            className="p-4"
            hoverClass
            smallLabel="Delete"
            smallLabelColor="text-tp-primary tracking-wider"
          />
          <ButtonIcon
            icon={<MdDelete className="h-6 w-6" />}
            variant="flat"
            hoverClass
            iconColor="text-tp-typography"
            smallLabel="Delete"
            smallLabelColor="text-tp-typography tracking-wider"
          />
        </div>

        <Typography variant="subtitle" as="h2" className="p-2 underline">
          Modals
        </Typography>
        <Button
          label="Open modal"
          themeColor="primary"
          onClick={() => setOpen(true)}
          className="ml-2"
        />
        <ModalBase
          title="Confirm delete"
          description="Are you sure you want to delete this?"
          open={open}
          onClose={() => setOpen(false)}
          icon={<RiAlertFill className="h-10 w-10" />}
          buttons={[
            {
              label: "Yes",
              themeColor: "warning",
              onClick: () => console.log("Na ovome kroku"),
              className: "w-full",
              buttonSize: "base",
            },
            {
              label: "No",
              themeColor: "tertiary",
              onClick: () => setOpen(false),
              className: "w-full",
              buttonSize: "base",
            },
          ]}
        />

        <Typography variant="subtitle" as="h2" className="p-2 underline">
          Chips
        </Typography>
        <div className="m-2 p-2"></div>
      </div>
    </div>
  );
};

export default TestPage;

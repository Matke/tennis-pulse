// components
import Button from "@/components/buttons/Button";

// icons
import { MdOutlineSportsTennis } from "react-icons/md";
import { BiSolidTennisBall } from "react-icons/bi";
import { GiTennisCourt } from "react-icons/gi";
import { FaTrash } from "react-icons/fa";
import { FaHourglassStart } from "react-icons/fa";
import { RiSettings3Fill } from "react-icons/ri";
import { PiSneakerMoveFill } from "react-icons/pi";
import { useState } from "react";

const TestPage = () => {
  const [isDataFetching, setIsDataFetching] = useState<boolean>(false);
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
            //   disabled
            className="w-72"
            uppercaseLabel
            buttonSize="huge"
            isLoading={isDataFetching}
            onClick={() => setIsDataFetching(!isDataFetching)}
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
        </div>
      </div>
    </div>
  );
};

export default TestPage;

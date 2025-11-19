import Button from "@/components/buttons/Button";
import { MdOutlineSportsTennis } from "react-icons/md";
import { BiSolidTennisBall } from "react-icons/bi";
import { GiTennisCourt } from "react-icons/gi";

const TestPage = () => {
  return (
    <div className="bg-charcoal-900 h-screen w-screen">
      <div className="bg-tp-primary text-platinum-950 p-2 tracking-wider">
        Tennis Pulse App
      </div>
      <div className="m-4 flex h-60 max-w-full flex-col items-center gap-2">
        <Button
          label="Novak Djokovic"
          themeColor="primary"
          fullWidth
          //   disabled
          onClick={() => console.log("Na ovome kroku")}
        />
        <div className="flex w-full items-center justify-between">
          <Button
            label="Novak Djokovic"
            themeColor="primary"
            onClick={() => console.log("Na ovome kroku")}
          />
          <Button
            label="Novak Djokovic"
            themeColor="primary"
            isLoading
            onClick={() => console.log("Na ovome kroku")}
          />
          <Button
            label="Novak Djokovic"
            themeColor="primary"
            onClick={() => console.log("Na ovome kroku")}
          />
          <Button
            label="Novak Djokovic"
            themeColor="primary"
            onClick={() => console.log("Na ovome kroku")}
            className="self-end"
            icon={<MdOutlineSportsTennis className="h-5 w-5" />}
            loaderWithLabel={false}
            // isLoading
          />
          <Button
            label="Book court"
            themeColor="primary"
            onClick={() => console.log("Na ovome kroku")}
            className="self-end"
            // isLoading
            loaderWithLabel
            icon={<GiTennisCourt className="h-5 w-5" />}
          />
        </div>
      </div>
      <div className="flex w-160 flex-col gap-2">
        <Button
          label="Novak Djokovic"
          themeColor="primary"
          onClick={() => console.log("Na ovome kroku")}
          //   isLoading
          fullWidth={false}
          icon={<BiSolidTennisBall className="h-5 w-5" />}
          className="self-center"
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
      </div>
    </div>
  );
};

export default TestPage;

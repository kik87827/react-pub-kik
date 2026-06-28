import Checkbox from "@/shared/ui/atoms/checkbox";
import EditIcon from "@/shared/ui/atoms/icon/EditIcon";
import PenIcon from "@/shared/ui/atoms/icon/PenIcon";
import SearchIcon from "@/shared/ui/atoms/icon/SearchIcon";
import SortingIcon from "@/shared/ui/atoms/icon/SortingIcon";
import WarnIcon from "@/shared/ui/atoms/icon/WarnIcon";
import { BookmarkIcon, PlusIcon } from "@radix-ui/react-icons";
import { Button, Flex, Select } from "@radix-ui/themes";

const PagesSample = () => {
  return (
    <div>
      <Flex gap="3">
        <Button color="gray" variant="classic">
          Edit profile
        </Button>
        <Button color="gray" variant="solid">
          Edit profile
        </Button>
        <Button color="gray" variant="soft">
          Edit profile
        </Button>
        <Button color="gray" variant="surface">
          Edit profile
        </Button>
        <Button color="gray" variant="outline">
          Edit profile
        </Button>
        <Button>
          <BookmarkIcon /> Bookmark
        </Button>
      </Flex>

      <br />

      <Select.Root defaultValue="apple">
        <Select.Trigger />
        <Select.Content>
          <Select.Group>
            <Select.Label>Fruits</Select.Label>
            <Select.Item value="orange">Orange</Select.Item>
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="grape" disabled>
              Grape
            </Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Root>

      <br />
      <Flex gap="3">
        <BookmarkIcon />
        <SearchIcon />
        <EditIcon />
        <SortingIcon />
        <PlusIcon />
        <PenIcon />
        <WarnIcon />
      </Flex>

      <br />
      <Checkbox />
    </div>
  );
};

export default PagesSample;

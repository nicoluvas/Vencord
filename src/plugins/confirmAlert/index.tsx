import { Devs } from "@utils/constants";
import { definePluginSettings } from "@api/Settings";
import definePlugin, { OptionType } from "@utils/types";
import { ModalRoot, ModalProps, ModalHeader, ModalFooter } from "@utils/modal";



export function confirmationModal({ rootProps }: { rootProps: ModalProps; }) {
  return (
    <ModalRoot {...rootProps}>

      <ModalHeader>

      </ModalHeader>

      <ModalFooter>
        <p>Are you sure you want to {settings.store.behavior}?</p>
        <p>Are you sure you want to {settings.store.defaultOption ? "YES" : "NO"}?</p>
      </ModalFooter>

    </ModalRoot>
  );
}


const settings = definePluginSettings({
  behavior: {
    type: OptionType.SELECT,
    description: "Which actions to confirm",
    options: [
      { label: "Quit + Restart", value: "both", default: true },
      { label: "Quit", value: "quit" },
      { label: "Restart", value: "restart" },
    ],
  },
  defaultOption: {
    type: OptionType.BOOLEAN,
    description: "Define YES as an option as the default one",
    default: true
  }
});

export default definePlugin({
  name: "Confirm Alert",
  description:
    "Prevent accidental quits (CTRL + Q) or restarts (CTRL + R) by showing a confirmation dialog",
  authors: [Devs.mura],
  settings,
});
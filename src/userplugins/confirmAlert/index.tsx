import { Devs } from "@utils/constants";
import { definePluginSettings } from "@api/Settings";
import definePlugin, { OptionType } from "@utils/types";
import { ModalRoot, ModalProps, ModalHeader, ModalFooter } from "@utils/modal";
import { Forms } from "@webpack/common";


export function confirmationModal(mode:string, { rootProps }: { rootProps: ModalProps; }) {
    return (
        <ModalRoot {...rootProps}>

            <ModalHeader>
                <Forms.FormTitle tag="h2">
                    Are you sure?
                </Forms.FormTitle>
            </ModalHeader>

            <ModalFooter>
                <p>Are you sure you want to {mode}?</p>
            </ModalFooter>
        </ModalRoot>
    )
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
});

export default definePlugin({
  name: "Confirm Alert",
  description:
    "Prevent accidental quits (CTRL + Q) or restarts (CTRL + R) by showing a confirmation dialog",
  authors: [Devs.mura],
});
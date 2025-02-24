/*
 * Vencord, a Discord client mod
 * Copyright (c) 2025 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { definePluginSettings } from "@api/Settings";
import { Devs } from "@utils/constants";
import { ModalHeader, ModalProps, ModalRoot } from "@utils/modal";
import definePlugin, { OptionType } from "@utils/types";

export function confirmationModal({ rootProps }: { rootProps: ModalProps; }) {
  return (
    <ModalRoot {...rootProps}>

      <ModalHeader>
        <p>we do a lilttle testingg</p>
      </ModalHeader>

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
    "Prevent accidental quits (CTRL + Q) and restarts (CTRL + R) by showing a confirmation dialog",
  authors: [Devs.mura],
  settings,
  patches: [
    {
      find: "S.window.close",
      replacement: {
          match: /S.window.close/,
          replace: "console.log('success!')",
      }
    }
  ]
});

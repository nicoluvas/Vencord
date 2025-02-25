/*
 * Vencord, a Discord client mod
 * Copyright (c) 2025 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { definePluginSettings } from "@api/Settings";
import { Devs } from "@utils/constants";
// eslint-disable-next-line unused-imports/no-unused-imports
import { ModalFooter, ModalHeader, ModalProps, ModalRoot } from "@utils/modal";
import definePlugin, { OptionType } from "@utils/types";

export function confirmationModal({ rootProps }: { rootProps: ModalProps; }) {
  return (
    <ModalRoot {...rootProps}>

      <ModalHeader>
        we do a lilttle testingg
      </ModalHeader>

      <ModalFooter>
        hiiii
      </ModalFooter>

    </ModalRoot>
  );
}


const settings = definePluginSettings({
  behavior: {
    type: OptionType.SELECT,
    description: "Which actions to require confirmation",
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
  name: "ConfirmAlert",
  description:
    "Prevent accidental quits (CTRL + Q) and restarts (CTRL + R) by showing a confirmation dialog",
  authors: [Devs.mura],
  settings,
  patches: [
    {
      find: "S.window.close",
      replacement: {
          match: /S.window.close/,
          replace: "import { ModalFooter, ModalHeader, ModalProps, ModalRoot } from '@utils/modal'; openModal(confirmationModal);",
      }
    },
    // {
    //   find: "location.reload",
    //   replacement: {
    //       match: /location.reload/,
    //       replace: "console.log('success RESTARTING!')",
    //   }
    // }
  ]
});

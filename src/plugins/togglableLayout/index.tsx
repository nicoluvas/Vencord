/*
 * Vencord, a Discord client mod
 * Copyright (c) 2025 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { definePluginSettings } from "@api/Settings";
import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";


const settings = definePluginSettings({});

export default definePlugin({
  name: "ToggableLayout",
  description:
    "Ability to hide and show UI components",
  authors: [Devs.mura],
  settings,
});

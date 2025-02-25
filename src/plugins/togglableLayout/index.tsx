/*
 * Vencord, a Discord client mod
 * Copyright (c) 2025 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import ErrorBoundary from "@components/ErrorBoundary";
import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";
import { ContextMenuApi, Menu } from "@webpack/common";
import React from "react";

const HideContextMenu = ErrorBoundary.wrap(() => {
  return (
    <Menu.Menu
      navId="vc-ap-server-profile"
      onClose={ContextMenuApi.closeContextMenu}
    >
      <Menu.MenuItem
        id="vc-ap-view-alternate-popout"
        label={"Hide Component"}
        action={e => { }}
      />
    </Menu.Menu>
  );
}, { noop: true });

export default definePlugin({
  name: "ToggableLayout",
  description: "Ability to hide and show UI components",
  authors: [Devs.mura],

  specificThingRef: React.createRef(),

  openHidePanelContextMenu(event: UIEvent) {
    ContextMenuApi.openContextMenu(event as UIEvent, HideContextMenu);
  },

  componentDidMount() {
    const specificThingElement = this.specificThingRef.current;
    if (specificThingElement instanceof HTMLElement) {
      specificThingElement.addEventListener("contextmenu", this.openHidePanelContextMenu);
    }
  },
});

// basically the app is about right clicking and than selecting option to hide: stores the path of the element and set as display:none

// const XPaths = {
//   privateChannels:'//*[@id="app-mount"]/div[3]/div[1]/div[1]/div/div[2]/div/div/div/div/div',
//   guilds:'//*[@id="app-mount"]/div[3]/div[1]/div[1]/div/div[2]/div/div/nav',
//   subtitleContainer:'//*[@id="app-mount"]/div[3]/div[1]/div[1]/div/div[2]/div/div/div/div/div[2]/div[2]',
//   containerToAddButtonToModal:'//*[@id="app-mount"]/div[3]/div[1]/div[1]/div/div[2]/div/div/div/div/div[2]/div[2]/section/div'
// };

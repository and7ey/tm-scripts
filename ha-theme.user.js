// ==UserScript==
// @name         Home Assistant Theme Changer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Changes HTML tag based on minute value
// @match        http://192.168.1.110:8123/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to get current time and determine if it's dark mode
    function isDarkMode() {
        const now = new Date();
        const hour = now.getHours();
        const minute = now.getMinutes();

        return (hour === 20 && minute >= 0) || (hour > 20);
    }

    // Function to set HTML tag attributes
    function setHtmlAttributes(isDark) {
        const htmlTag = document.documentElement;

        if (isDark) {
            htmlTag.setAttribute('style', `
                --state-icon-error-color: var(--error-state-color, var(--error-color));
                --state-unavailable-color: var(--state-icon-unavailable-color, var(--disabled-text-color));
                --sidebar-text-color: var(--primary-text-color);
                --sidebar-background-color: var(--card-background-color);
                --sidebar-selected-text-color: var(--primary-color);
                --sidebar-selected-icon-color: var(--primary-color);
                --sidebar-icon-color: rgba(var(--rgb-primary-text-color), 0.6);
                --switch-checked-color: var(--primary-color);
                --switch-checked-button-color: var(--switch-checked-color, var(--primary-background-color));
                --switch-checked-track-color: var(--switch-checked-color, #000000);
                --switch-unchecked-button-color: var(--switch-unchecked-color, var(--primary-background-color));
                --switch-unchecked-track-color: var(--switch-unchecked-color, #000000);
                --slider-color: var(--primary-color);
                --slider-secondary-color: var(--light-primary-color);
                --slider-track-color: var(--scrollbar-thumb-color);
                --label-badge-background-color: var(--card-background-color);
                --label-badge-text-color: rgba(var(--rgb-primary-text-color), 0.8);
                --paper-listbox-background-color: var(--card-background-color);
                --paper-item-icon-color: var(--state-icon-color);
                --paper-item-icon-active-color: var(--state-icon-active-color);
                --table-header-background-color: var(--input-fill-color);
                --table-row-background-color: var(--primary-background-color);
                --table-row-alternative-background-color: var(--secondary-background-color);
                --data-table-background-color: var(--card-background-color);
                --markdown-code-background-color: var(--primary-background-color);
                --mdc-theme-primary: var(--primary-color);
                --mdc-theme-secondary: var(--accent-color);
                --mdc-theme-background: var(--primary-background-color);
                --mdc-theme-surface: var(--card-background-color);
                --mdc-theme-on-primary: var(--text-primary-color);
                --mdc-theme-on-secondary: var(--text-primary-color);
                --mdc-theme-on-surface: var(--primary-text-color);
                --mdc-theme-text-disabled-on-light: var(--disabled-text-color);
                --mdc-theme-text-primary-on-background: var(--primary-text-color);
                --mdc-theme-text-secondary-on-background: var(--secondary-text-color);
                --mdc-theme-text-hint-on-background: var(--secondary-text-color);
                --mdc-theme-text-icon-on-background: var(--secondary-text-color);
                --mdc-theme-error: var(--error-color);
                --app-header-text-color: var(--text-primary-color);
                --app-header-background-color: var(--primary-color);
                --app-theme-color: var(--app-header-background-color);
                --mdc-checkbox-unchecked-color: rgba(var(--rgb-primary-text-color), 0.54);
                --mdc-checkbox-disabled-color: var(--disabled-text-color);
                --mdc-radio-unchecked-color: rgba(var(--rgb-primary-text-color), 0.54);
                --mdc-radio-disabled-color: var(--disabled-text-color);
                --mdc-tab-text-label-color-default: var(--primary-text-color);
                --mdc-button-disabled-ink-color: var(--disabled-text-color);
                --mdc-button-outline-color: var(--outline-color);
                --mdc-dialog-scroll-divider-color: var(--divider-color);
                --mdc-dialog-heading-ink-color: var(--primary-text-color);
                --mdc-dialog-content-ink-color: var(--primary-text-color);
                --mdc-text-field-idle-line-color: var(--input-idle-line-color);
                --mdc-text-field-hover-line-color: var(--input-hover-line-color);
                --mdc-text-field-disabled-line-color: var(--input-disabled-line-color);
                --mdc-text-field-outlined-idle-border-color: var(--input-outlined-idle-border-color);
                --mdc-text-field-outlined-hover-border-color: var(--input-outlined-hover-border-color);
                --mdc-text-field-outlined-disabled-border-color: var(--input-outlined-disabled-border-color);
                --mdc-text-field-fill-color: var(--input-fill-color);
                --mdc-text-field-disabled-fill-color: var(--input-disabled-fill-color);
                --mdc-text-field-ink-color: var(--input-ink-color);
                --mdc-text-field-label-ink-color: var(--input-label-ink-color);
                --mdc-text-field-disabled-ink-color: var(--input-disabled-ink-color);
                --mdc-select-idle-line-color: var(--input-idle-line-color);
                --mdc-select-hover-line-color: var(--input-hover-line-color);
                --mdc-select-outlined-idle-border-color: var(--input-outlined-idle-border-color);
                --mdc-select-outlined-hover-border-color: var(--input-outlined-hover-border-color);
                --mdc-select-outlined-disabled-border-color: var(--input-outlined-disabled-border-color);
                --mdc-select-fill-color: var(--input-fill-color);
                --mdc-select-disabled-fill-color: var(--input-disabled-fill-color);
                --mdc-select-ink-color: var(--input-ink-color);
                --mdc-select-label-ink-color: var(--input-label-ink-color);
                --mdc-select-disabled-ink-color: var(--input-disabled-ink-color);
                --mdc-select-dropdown-icon-color: var(--input-dropdown-icon-color);
                --mdc-select-disabled-dropdown-icon-color: var(--input-disabled-ink-color);
                --ha-assist-chip-filled-container-color: rgba(var(--rgb-primary-text-color),0.15);
                --ha-assist-chip-active-container-color: rgba(var(--rgb-primary-color),0.15);
                --chip-background-color: rgba(var(--rgb-primary-text-color), 0.15);
                --material-body-text-color: var(--primary-text-color);
                --material-background-color: var(--card-background-color);
                --material-secondary-background-color: var(--secondary-background-color);
                --material-secondary-text-color: var(--secondary-text-color);
                --state-cover-garage_door-open-color: #ff0000;
                --rgb-state-cover-garage_door-open-color: 255,0,0;
                background-color: rgb(250, 250, 250);
                --simple-tooltip-delay-in: 0ms;
            `);
        } else {
            htmlTag.setAttribute('style', `
                --state-icon-error-color: var(--error-state-color, var(--error-color));
                --state-unavailable-color: var(--state-icon-unavailable-color, var(--disabled-text-color));
                --sidebar-text-color: var(--primary-text-color);
                --sidebar-background-color: var(--card-background-color);
                --sidebar-selected-text-color: var(--primary-color);
                --sidebar-selected-icon-color: var(--primary-color);
                --sidebar-icon-color: rgba(var(--rgb-primary-text-color), 0.6);
                --switch-checked-color: var(--primary-color);
                --switch-checked-button-color: var(--switch-checked-color, var(--primary-background-color));
                --switch-checked-track-color: var(--switch-checked-color, #000000);
                --switch-unchecked-button-color: #999999;
                --switch-unchecked-track-color: #9b9b9b;
                --slider-color: var(--primary-color);
                --slider-secondary-color: var(--light-primary-color);
                --slider-track-color: var(--scrollbar-thumb-color);
                --label-badge-background-color: var(--card-background-color);
                --label-badge-text-color: rgba(var(--rgb-primary-text-color), 0.8);
                --paper-listbox-background-color: var(--card-background-color);
                --paper-item-icon-color: var(--state-icon-color);
                --paper-item-icon-active-color: var(--state-icon-active-color);
                --table-header-background-color: var(--input-fill-color);
                --table-row-background-color: var(--primary-background-color);
                --table-row-alternative-background-color: var(--secondary-background-color);
                --data-table-background-color: var(--card-background-color);
                --markdown-code-background-color: var(--primary-background-color);
                --mdc-theme-primary: var(--primary-color);
                --mdc-theme-secondary: var(--accent-color);
                --mdc-theme-background: var(--primary-background-color);
                --mdc-theme-surface: var(--card-background-color);
                --mdc-theme-on-primary: var(--text-primary-color);
                --mdc-theme-on-secondary: var(--text-primary-color);
                --mdc-theme-on-surface: var(--primary-text-color);
                --mdc-theme-text-disabled-on-light: var(--disabled-text-color);
                --mdc-theme-text-primary-on-background: var(--primary-text-color);
                --mdc-theme-text-secondary-on-background: var(--secondary-text-color);
                --mdc-theme-text-hint-on-background: var(--secondary-text-color);
                --mdc-theme-text-icon-on-background: var(--secondary-text-color);
                --mdc-theme-error: var(--error-color);
                --app-header-text-color: #e1e1e1;
                --app-header-background-color: #101e24;
                --app-theme-color: var(--app-header-background-color);
                --mdc-checkbox-unchecked-color: rgba(var(--rgb-primary-text-color), 0.54);
                --mdc-checkbox-disabled-color: var(--disabled-text-color);
                --mdc-radio-unchecked-color: rgba(var(--rgb-primary-text-color), 0.54);
                --mdc-radio-disabled-color: var(--disabled-text-color);
                --mdc-tab-text-label-color-default: var(--primary-text-color);
                --mdc-button-disabled-ink-color: var(--disabled-text-color);
                --mdc-button-outline-color: var(--outline-color);
                --mdc-dialog-scroll-divider-color: var(--divider-color);
                --mdc-dialog-heading-ink-color: var(--primary-text-color);
                --mdc-dialog-content-ink-color: var(--primary-text-color);
                --mdc-text-field-idle-line-color: var(--input-idle-line-color);
                --mdc-text-field-hover-line-color: var(--input-hover-line-color);
                --mdc-text-field-disabled-line-color: var(--input-disabled-line-color);
                --mdc-text-field-outlined-idle-border-color: var(--input-outlined-idle-border-color);
                --mdc-text-field-outlined-hover-border-color: var(--input-outlined-hover-border-color);
                --mdc-text-field-outlined-disabled-border-color: var(--input-outlined-disabled-border-color);
                --mdc-text-field-fill-color: var(--input-fill-color);
                --mdc-text-field-disabled-fill-color: var(--input-disabled-fill-color);
                --mdc-text-field-ink-color: var(--input-ink-color);
                --mdc-text-field-label-ink-color: var(--input-label-ink-color);
                --mdc-text-field-disabled-ink-color: var(--input-disabled-ink-color);
                --mdc-select-idle-line-color: var(--input-idle-line-color);
                --mdc-select-hover-line-color: var(--input-hover-line-color);
                --mdc-select-outlined-idle-border-color: var(--input-outlined-idle-border-color);
                --mdc-select-outlined-hover-border-color: var(--input-outlined-hover-border-color);
                --mdc-select-outlined-disabled-border-color: var(--input-outlined-disabled-border-color);
                --mdc-select-fill-color: var(--input-fill-color);
                --mdc-select-disabled-fill-color: var(--input-disabled-fill-color);
                --mdc-select-ink-color: var(--input-ink-color);
                --mdc-select-label-ink-color: var(--input-label-ink-color);
                --mdc-select-disabled-ink-color: var(--input-disabled-ink-color);
                --mdc-select-dropdown-icon-color: var(--input-dropdown-icon-color);
                --mdc-select-disabled-dropdown-icon-color: var(--input-disabled-ink-color);
                --ha-assist-chip-filled-container-color: rgba(var(--rgb-primary-text-color),0.15);
                --ha-assist-chip-active-container-color: rgba(var(--rgb-primary-color),0.15);
                --chip-background-color: rgba(var(--rgb-primary-text-color), 0.15);
                --material-body-text-color: var(--primary-text-color);
                --material-background-color: var(--card-background-color);
                --material-secondary-background-color: var(--secondary-background-color);
                --material-secondary-text-color: var(--secondary-text-color);
                --state-cover-garage_door-open-color: #ff0000;
                --rgb-state-cover-garage_door-open-color: 255,0,0;
                background-color: rgb(17, 17, 17);
                --simple-tooltip-delay-in: 0ms;
                --rgb-switch-unchecked-button-color: 153,153,153;
                --rgb-switch-unchecked-track-color: 155,155,155;
                --rgb-app-header-text-color: 225,225,225;
                --rgb-app-header-background-color: 16,30,36;
                --primary-background-color: #111111;
                --rgb-primary-background-color: 17,17,17;
                --card-background-color: #1c1c1c;
                --rgb-card-background-color: 28,28,28;
                --secondary-background-color: #282828;
                --rgb-secondary-background-color: 40,40,40;
                --clear-background-color: #111111;
                --rgb-clear-background-color: 17,17,17;
                --primary-text-color: #e1e1e1;
                --rgb-primary-text-color: 225,225,225;
                --secondary-text-color: #9b9b9b;
                --rgb-secondary-text-color: 155,155,155;
                --disabled-text-color: #6f6f6f;
                --rgb-disabled-text-color: 111,111,111;
                --divider-color: rgba(225, 225, 225, .12);
                --outline-color: rgba(225, 225, 225, .12);
                --outline-hover-color: rgba(225, 225, 225, .24);
                --mdc-ripple-color: #AAAAAA;
                --rgb-mdc-ripple-color: 170,170,170;
                --mdc-linear-progress-buffer-color: rgba(255, 255, 255, 0.1);
                --input-idle-line-color: rgba(255, 255, 255, 0.42);
                --input-hover-line-color: rgba(255, 255, 255, 0.87);
                --input-disabled-line-color: rgba(255, 255, 255, 0.06);
                --input-outlined-idle-border-color: rgba(255, 255, 255, 0.38);
                --input-outlined-hover-border-color: rgba(255, 255, 255, 0.87);
                --input-outlined-disabled-border-color: rgba(255, 255, 255, 0.06);
                --input-fill-color: rgba(255, 255, 255, 0.05);
                --input-disabled-fill-color: rgba(255, 255, 255, 0.02);
                --input-ink-color: rgba(255, 255, 255, 0.87);
                --input-label-ink-color: rgba(255, 255, 255, 0.6);
                --input-disabled-ink-color: rgba(255, 255, 255, 0.37);
                --input-dropdown-icon-color: rgba(255, 255, 255, 0.54);
                --codemirror-keyword: #C792EA;
                --rgb-codemirror-keyword: 199,146,234;
                --codemirror-operator: #89DDFF;
                --rgb-codemirror-operator: 137,221,255;
                --codemirror-variable: #f07178;
                --rgb-codemirror-variable: 240,113,120;
                --codemirror-variable-2: #EEFFFF;
                --rgb-codemirror-variable-2: 238,255,255;
                --codemirror-variable-3: #DECB6B;
                --rgb-codemirror-variable-3: 222,203,107;
                --codemirror-builtin: #FFCB6B;
                --rgb-codemirror-builtin: 255,203,107;
                --codemirror-atom: #F78C6C;
                --rgb-codemirror-atom: 247,140,108;
                --codemirror-number: #FF5370;
                --rgb-codemirror-number: 255,83,112;
                --codemirror-def: #82AAFF;
                --rgb-codemirror-def: 130,170,255;
                --codemirror-string: #C3E88D;
                --rgb-codemirror-string: 195,232,141;
                --codemirror-string-2: #f07178;
                --rgb-codemirror-string-2: 240,113,120;
                --codemirror-comment: #545454;
                --rgb-codemirror-comment: 84,84,84;
                --codemirror-tag: #FF5370;
                --rgb-codemirror-tag: 255,83,112;
                --codemirror-meta: #FFCB6B;
                --rgb-codemirror-meta: 255,203,107;
                --codemirror-attribute: #C792EA;
                --rgb-codemirror-attribute: 199,146,234;
                --codemirror-property: #C792EA;
                --rgb-codemirror-property: 199,146,234;
                --codemirror-qualifier: #DECB6B;
                --rgb-codemirror-qualifier: 222,203,107;
                --codemirror-type: #DECB6B;
                --rgb-codemirror-type: 222,203,107;
                --energy-grid-return-color: #a280db;
                --rgb-energy-grid-return-color: 162,128,219;
                --map-filter: invert(.9) hue-rotate(170deg) brightness(1.5) contrast(1.2) saturate(.3);
                --disabled-color: #464646;
                --rgb-disabled-color: 70,70,70;
                `);
        }

    }

    // Initial setup
    setHtmlAttributes(isDarkMode());

    // Update every minute
    setInterval(() => {
        setHtmlAttributes(isDarkMode());
    }, 60000);

})();

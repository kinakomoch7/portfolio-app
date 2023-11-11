import { TypographyProps } from "@mui/material";
import { BLACK, DARK_PINK } from "./colors";

export const headingStyle:TypographyProps = {
    align: 'center',
    variant: 'h4',
    sx: { fontWeight: 'bold', margin: '0.5em' },
    color: DARK_PINK,
    fontFamily: 'monospace'
}

export const cardHeadingStyle:TypographyProps = {
    align: 'center',
    variant: 'subtitle1',
    sx: { fontWeight: 'bold', margin: '0.5em' },
    color: BLACK,
    fontFamily: 'inherit'
}
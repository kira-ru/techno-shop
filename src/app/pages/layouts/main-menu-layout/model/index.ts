import {ThemeType} from "@ant-design/icons-angular";

export type MenuItem = {
  title?: string,
  route?: string[],
  image?: string,
  imageThemeType?: ThemeType,
  selected?: boolean,
  disabled?: boolean,
  permissionRights?: string,
}

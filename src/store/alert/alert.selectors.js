export class AlertSelectors {
  static selectIsOpen = (state) => state.alert.isOpen
  static selectMessage = (state) => state.alert.message
  static selectVariant = (state) => state.alert.variant
}

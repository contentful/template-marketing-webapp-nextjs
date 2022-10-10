export type ProvisionStep<PropsType, PayloadType = void> = (
  props: PropsType,
) => Promise<PayloadType>;

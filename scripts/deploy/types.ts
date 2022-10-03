type ProvisionStepReturnType<T> =
  | { state: 'success'; payload: T }
  | { state: 'error'; error: string };

export type ProvisionStep<PropsType, PayloadType = undefined> = (
  props: PropsType,
) => Promise<ProvisionStepReturnType<PayloadType>>;

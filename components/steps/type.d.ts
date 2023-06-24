export interface Step {
    next: () => void
}

export type StepComp = React.FC<Step>
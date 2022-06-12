import { classNames } from "/utils/classNames";


export default function Box ({ className, children, ...props }) {

  return (
    <div {...props} className={classNames(className, 'border')}>
      {children}
    </div>
  )
}
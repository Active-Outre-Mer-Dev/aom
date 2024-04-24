import { cardStyles, buttonStyles, badgeStyles } from "@aomdev/ui/styles";

export function StylesFunctionsDemo() {
  return (
    <div className={cardStyles({ className: "w-fit space-y-4" })}>
      <div className="flex items-center gap-4">
        <h3
          style={{ margin: 0 }}
          className="font-semibold text-3xl mt-0"
        >
          Custom Card
        </h3>
        <div className={badgeStyles()}>New</div>
      </div>
      <p>
        Esse sunt Lorem consectetur non. Amet proident aute nisi commodo. Excepteur ullamco ex occaecat
        aliquip voluptate sit velit labore culpa est. Id cillum officia occaecat officia voluptate sint
        eiusmod do. Nisi adipisicing ex Lorem esse. Proident incididunt laboris fugiat ipsum occaecat. Laborum
        pariatur ex ex amet.
      </p>
      <button className={buttonStyles()}>View</button>
    </div>
  );
}

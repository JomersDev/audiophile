export default function CategoryCard(props) {
    return (
      <div className="flex flex-col items-center p-5 rounded-lg bg-seaShell">
        <img 
          className="h-28"
          src={props.image} 
          alt="headphones" 
        />
        <h6 className="mb-4">
          {props.category}
        </h6>
        <div className="flex items-center gap-x-4">
          <p className="text-sm font-bold tracking-wider uppercase opacity-50">
            shop
          </p>
          <img src="/shared/desktop/icon-arrow-right.svg" alt="arrow right" />
        </div>
      </div>
    )
}
import { Button } from "@/components/ui/button";

const ButtonsPage =() => {
    return(
        <div className="p-4 space-y-4 flex flex-col  max-w-[200px]">
            <Button> Default </Button>
            <Button variant="primary"> primary </Button>
            <Button variant="primaryOutline"> primary outline</Button>
            <Button variant="secondary"> secondary </Button>
            <Button variant="secondaryOutline"> secondary outline</Button>
            <Button variant="danger"> danger </Button>
            <Button variant="dangerOutline"> danger outline</Button>
            <Button variant="super"> super </Button>
            <Button variant="superOutline"> super outline</Button>
            <Button variant="sidebar"> sidebare </Button>
            <Button variant="sidebarOutline"> sidebare outline</Button>
            <Button variant="ghost"> ghost </Button>
            
        </div>
    );
};
export default ButtonsPage;
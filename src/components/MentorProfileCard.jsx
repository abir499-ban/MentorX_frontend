import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Mentor } from "../../constants/demo_data";

function MentorProfileCard() {
    return (
        <Card className="w-60 h-full">
            <CardHeader shadow={false} floated={false} >
                <img
                    src={Mentor.profile_url}
                    alt="card-image"
                    className="h-full w-full object-cover"
                />
            </CardHeader>
            <CardBody>
                <div className="mb-2 flex items-center justify-between">
                    <Typography color="blue-gray" className="font-medium">
                        {Mentor.name}
                    </Typography>
                </div>
                <Typography
                    variant="small"
                    color="black"
                    className="font-bold  opacity-75"
                >
                    {Mentor.position} @ <span className="p-2 font-body rounded-2xl shadow-sm shadow-gray-700 text-light-blue-800">{Mentor.company}</span>
                </Typography>
                <Typography
                    variant="small"
                    color="black"
                    className="font-normal  opacity-75 mt-7">
                    {Mentor.bio}
                </Typography>
            </CardBody>
        </Card>
    );
}

export default MentorProfileCard
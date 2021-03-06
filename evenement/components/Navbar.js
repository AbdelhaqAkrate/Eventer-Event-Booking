import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'



export default function Navigation()
{
    return(
    <Breadcrumb display="flex" alignItems="center" width="100%" justifyContent="center" background="linear-gradient(45deg, #3d3d45, #765a3e, #ac7931, #e49912)" >
        <BreadcrumbItem >
            <BreadcrumbLink href='/' color='white'>Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
            <BreadcrumbLink href='/events' color='white'>Explore Events</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem >
            <BreadcrumbLink href='/about' color='white'>About</BreadcrumbLink>
        </BreadcrumbItem>
    </Breadcrumb>
    )
}
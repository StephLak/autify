import React from "react";
import { Box, Flex } from "@chakra-ui/react";

import Feature from "./feature.component";
import { featuresData } from "./feature-data";

const FeaturesSection = () => {
	const featuresText = `
    Some of the features and advantages that we provide for our clients.
    `;

	return (
		<>
			<Flex
				h="900px"
				mt="50px"
				ml="10%"
				mr="18%"
				direction="column"
				textAlign="center">
				<Box fontSize="35px" fontWeight="bolder" color="#212353">
					Features
				</Box>
				<Box fontSize="18px" mt="25px" mx="20%">
					{featuresText}
				</Box>
				<Flex flexWrap="wrap" mt="25px">
					{featuresData.map((feature) => {
						return (
							<Feature
								key={feature.key}
								ariaLabel={feature.ariaLabel}
								url={feature.url}
								src={feature.src}
								marginTop={feature.marginTop}
								marginXAxis={feature.marginXAxis}
							/>
						);
					})}
				</Flex>
			</Flex>
		</>
	);
};

export default FeaturesSection;

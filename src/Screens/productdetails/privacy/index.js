import React from "react";
import AppContainer from "../../../core/AppContainer";
import { Text, View } from "react-native";
import UserContext from "../../../AuthContaxt";
import { AppStyles } from "../../../theme/styles";
import { Typography } from "../../../theme/Typography";

function ProductPrivacy() {
  const state = React.useContext(UserContext);

  return (<AppContainer
      state={state}
      children={<View>
        <Text style={Typography.MediumBold}>{"Privacy"}</Text>
        <Text>{"The number on the front of the pot represents the mg per kg of MGO (Methylglyoxal) and the related strength of Antimicrobial Activity, which is known to kill certain types of bacteria. The greater the number, the stronger the Antimicrobial Activity. MGO in Mānuka honey is naturally made in the hive from DHA which is present in the nectar of the Manuka Bush. Within the hive, DHA undergoes the Maillard reaction to naturally form MGO. 100% Genuine New Zealand Mānuka Honey. Independently tested to show it meets the New Zealand Government's definition of Mānuka honey. Honey should not be given to infants under 12 months old. Manuka Pharm Mānuka Honey purchased directly from us will have an expiry date with a minimum of 6 months remaining from the date of purchase. Please note that Manuka Pharm Honey is not for resale. Manuka Pharm honey pots are BPA free. In hot weather we recommend that our Manuka Pharm Honey is refrigerated to maintain a thick, golden consistency. If your honey does become runny then simply chill for a few hours."}</Text>

      </View>}>
    </AppContainer>
  );
}

export { ProductPrivacy };

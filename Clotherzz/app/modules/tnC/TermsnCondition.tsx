import styles from './TermsnConditionStyles';
import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import ConditionsCard from './ConditionsCard';

const TermsnCondition = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapperContainer}>
        <Text style={styles.heading}>Clotherzz: Terms of Use</Text>
        <Text style={styles.smallText}>
          Welcome to Clotherzz, your premier destination for all things fashion!
          These Terms of Use serve as the foundation for your experience on our
          platform. Clotherzz, operated by Clotherzz Inc., is dedicated to
          providing you with an unparalleled shopping experience, whether you're
          browsing our mobile application or website (collectively referred to
          as the "Service").
        </Text>
        <Text style={styles.mediumText}>Your Agreement</Text>
        <Text style={styles.smallText}>
          By accessing or using the Service, you affirmatively agree to be bound
          by these Terms of Use. These terms outline the rules and guidelines
          governing your interaction with Clotherzz. It's important to review
          these terms carefully to understand your rights and responsibilities
          while using our platform,
        </Text>
        <Text style={styles.mediumText}>Our Commitment</Text>
        <Text style={styles.smallText}>
          At Clotherzz, we are committed to providing you with a seamless and
          enjoyable shopping experience. Our team works tirelessly to curate a
          diverse selection of clothing and accessories to cater to your unique
          style preferences. We strive to maintain the highest standards of
          quality, reliability, and security across our platform.
        </Text>
        <ConditionsCard
          title="1. Acceptance of Terms"
          content='Welcome to Clotherzz! These Terms of Use govern your relationship with Clotherzz, including but not limited to your use of the Clotherzz mobile application and website (collectively referred to as the "Service"). By accessing or using the Service, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this Service.'
        />
        <ConditionsCard
          title="2. Use License"
          content='Permission is granted to temporarily download one copy of the materials (information or software) on Clotherzzs Service for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license, you may not:

Modify or copy the materials;
Use the materials for any commercial purpose or for any public display (commercial or non-commercial);
Attempt to decompile or reverse engineer any software contained on Clotherzzs Service;
Remove any copyright or other proprietary notations from the materials; or
Transfer the materials to another person or "mirror" the materials on any other server.'
        />
        <ConditionsCard
          title="3. Disclaimer"
          content="The materials on Clotherzz's Service are provided on an 'as is' basis. Clotherzz makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights."
        />
        <ConditionsCard
          title="4. Limitations of Liability"
          content="In no event shall Clotherzz or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Clotherzz's Service, even if Clotherzz or a Clotherzz authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you."
        />

        <ConditionsCard
          title="5. Revisions and Errata"
          content="The materials appearing on Clotherzz's Service could include technical, typographical, or photographic errors. Clotherzz does not warrant that any of the materials on its Service are accurate, complete, or current. Clotherzz may make changes to the materials contained on its Service at any time without notice. Clotherzz does not, however, make any commitment to update the materials."
        />
        <ConditionsCard
          title="6. Governing Law"
          content="These terms and conditions are governed by and construed in accordance with the laws of [Your Country/State], and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location."
        />
        <ConditionsCard
          title="7. Modifications to Terms of Use"
          content="Clotherzz may revise these terms of use for its Service at any time without notice. By using this Service, you are agreeing to be bound by the then-current version of these Terms of Use."
        />
        <ConditionsCard
          title="8. Contact Us"
          content="If you have any questions about these Terms of Use, please contact us at [contact email or address].

By using the Clotherzz Service, you signify your acceptance of these Terms of Use. If you do not agree to these terms, please do not use our Service."
        />
      </View>
    </ScrollView>
  );
};

export default TermsnCondition;

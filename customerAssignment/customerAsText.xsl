<?xml version="1.0" encoding="UTF-8" ?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="text"/>
    <xsl:template match="/customers">
        <xsl:for-each select="customer">Name: <xsl:value-of 
            select="name"></xsl:value-of>
Address: <xsl:value-of select="address/street">
</xsl:value-of>,<xsl:value-of select="address/city">
</xsl:value-of>,<xsl:value-of select="address/postalCode">
</xsl:value-of>
Phone(s): <xsl:for-each select="phoneNumber">
<xsl:value-of select="number">
</xsl:value-of>,<xsl:value-of select="type">
</xsl:value-of>;</xsl:for-each>
----- <xsl:text>&#xd;&#xa;</xsl:text><!-- line feed -->
        </xsl:for-each>
    </xsl:template>

</xsl:stylesheet>
